// Note - put the token andprefix in env variable later
const Discord = require('discord.js');
const { prefix, token, xivAPIKey } = require("./config.json");
const client = new Discord.Client();
const Player = require("./models/players.js"); // Save the players to the database
const servers = ["Balmung", "Brynhildr", "Coeurl", "Diabolos", "Goblin", "Malboro", "Mateus", "Zalera"];
const get = require("got");
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/calendar']; // If modifying these scopes, delete token.json.
const TOKEN_PATH = 'token.json';

// Some global functions for Google login
//=======================================
function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}
//=======================================
// End google global functions


// Listen for incoming messages
client.on('message', message => {

    if (message.content.startsWith(`${prefix}schedule`)) {
        message.channel.send("In the schecule a new run function")
    }

    if (message.content.startsWith(`${prefix}getnextevents`)) {
        message.channel.startTyping();
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Calendar API.
            authorize(JSON.parse(content), function(auth){
                const calendar = google.calendar({ version: 'v3', auth });
                calendar.events.list({
                    calendarId: 'primary',
                    timeMin: (new Date()).toISOString(),
                    maxResults: 10,
                    singleEvents: true,
                    orderBy: 'startTime',
                }, (err, res) => {
                    if (err) return console.log('The API returned an error: ' + err);
                    const events = res.data.items;
                    if (events.length) {
                        const CalendarList = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Next ten scheduled events')
                            .setURL('https://linktothecalendar.whatever')

                        for(let event of events){
                            let eventstart = new Date(event.start.dateTime);
                            var options = {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            };
                            var timeString = eventstart.toLocaleString('en-US', options);
                            CalendarList.addField(event.summary, eventstart.toDateString() + " at " + timeString);
                        }

                        CalendarList.addBlankField().setTimestamp();

                        message.channel.sendEmbed(CalendarList)
                        message.channel.stopTyping();
                    } else {
                        message.channel.send("There are no events scheduled.")
                        message.channel.stopTyping();
                    }
                });
            });
        });
    }

    if(message.guild){
        console.log("Voice channel")
    }

    if (message.content.startsWith(`${prefix}goodnight`)) {
        const username = message.member.user.username;
        message.channel.send(`Goodnight, ${username}. You got a lot of work done today!`);
    }


    if (message.content.startsWith(`${prefix}help`)) {
        const helpCommands = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Currently Working Bot Commands')
            .addField('Add yourself to the database: ', "```~addme serverName firstName lastName```")
            .addField('Remove yourself from the database', "```~deleteme```")
            .addField('Get the in-game name from a discordID', "```~findplayer discordId```")
            .addField('Get the next ten scheduled events', "```~getnextevents```")
            .addField('Give the bot some love', "```~iloveyoubot```")

//message.channel.sendCode("test")
        message.channel.sendEmbed(helpCommands);
    }

    if (message.content.startsWith(`${prefix}iloveyoubot`)) {
        const username = message.member.user.username;
        message.channel.send(`I love you too, ${username}. `);
    }

    // Add the player to the database
    if (message.content.startsWith(`${prefix}addme`)) {
        message.channel.startTyping();
        // Parse the incoming data from Discord
        const discordId = message.member.user.username + "#" + message.member.user.discriminator;
        let playerData = message.content;
        playerData = playerData.split(" ");
        const playerserver = playerData[1];
        const firstName = playerData[2];
        const lastName = playerData[3];
        let serverCheck = false;
        let lodestoneId;

        // Check that the server exists
        for (let server of servers) {
            if (playerserver === server) {
                serverCheck = true;
                break;
            }
        }

        if (serverCheck === false) {
            // Exits the conditional here
            message.channel.send("I can't find that server on Crystal datacenter. Please check the spelling.")
            message.channel.stopTyping();
        } else {
            // Query the Lodestone

            get(`https://xivapi.com/character/search?name=${firstName}+${lastName}&server=${playerserver}&private_key=${xivAPIKey}`)
                .then(result => {
                    let jsonResults;
                    try {
                        jsonResults = JSON.parse(result.body);
                    } catch (error) {
                        if (error) {
                            // put in error handling - throw an error to the catch block
                            console.log(error)
                        }
                    }

                    // Check for the existence of the Array and send back data if it's there
                    if (jsonResults.Results === undefined || jsonResults.Results.length == 0) {
                        message.channel.send("That user does not exist. Please try again.")
                    }
                    lodestoneId = jsonResults.Results[0].ID;
                    const newPlayer = new Player(null, discordId, playerserver, firstName, lastName, lodestoneId);
                    return newPlayer.save()
                })
                .then((result) => {
                    message.channel.send("Saved the user, send back some links, etc whatever");
                    message.channel.stopTyping();
                })
                .catch(error => {
                    if (error.message.includes("Duplicate")) {
                        message.channel.send("User already exists.");
                    } else {
                        message.channel.send("In the catch block")
                    }
                    console.log(error);
                    message.channel.stopTyping();
                })
        }
    }

    if (message.content.startsWith(`${prefix}deleteme`)) {
        const discordId = message.member.user.username + "#" + message.member.user.discriminator;
        Player.deleteUserByDiscordId(discordId)
            .then(([result, metadata]) => {
                console.log(result.affectedRows)
                if (result.affectedRows === 1) {
                    message.channel.send("User removed from the database")
                } else {
                    message.channel.send("You are not currently stored in our database.")
                }
            })
            .catch((error) => {
                message.channel.send("Something bad happened.")
            })

    }

    if (message.content.startsWith(`${prefix}findplayer`)) {
        let requestData = message.content;
        requestData = requestData.split(" ");
        discordId = requestData[1];
        Player.selectUserByDiscordId(discordId)
            .then(([results, metadata]) => {
                console.log(results[0]);
                if (!results[0]) {
                    message.channel.send("That user doesn't exist.")
                } else {
                    let inGameName = results[0].first_name + " " + results[0].last_name;
                    message.channel.send("Player's in-game name is: " + inGameName);
                }
            })
            .catch((error) => {
                console.log(error)
                message.channel.send("Something bad happened")
            })
    }




    // if (message.content.startsWith(`${prefix}kick`)){
    //     //message.channel.send("Kick");
    //     let member = message.mentions.members.first();
    //     member.kick()
    //     .then((member) => {
    //         message.channel.send("User: " + member.displayName + " was removed." )
    //     }).catch();


    // }
})







client.login(token);