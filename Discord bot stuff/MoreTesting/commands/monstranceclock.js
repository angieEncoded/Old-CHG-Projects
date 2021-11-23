const fs = require('fs');
const commontags = require('common-tags');
const cronJob = require('cron').CronJob;
const { prefix, clockAdmin, sanctumId, error_channel } = require('../config.json');
// 640972529019912203 id for the voice channel

// Below is a function modified from https://github.com/karashiiro/Prima/blob/master/Prima_Clerical/commands/addclock.js
// Karashiiro admin of CBA on Crystal datacenter

module.exports.run = (client, message) => {
    let content = message.content;
    content = content.split(" ");
    let channelid = content[1];
    let tz = content[2];
    let allowed = false;
    message.delete();

    // Check that the user has the correct role to manage the clock
    message.member.roles.forEach(function(role){
        if(role.name === clockAdmin){
            allowed = true;
            return;
        } 
    })

    // Return a message if the user is not allowed 
    if (!allowed){
        message.reply("You do not have permission to do that.");
        return;
    }

    let guildID = message.guild.id;
    const timezone = tz.replace(/[^a-zA-Z_\/+0-9-]/g, "");
    const channel = channelid.replace(/[a-zA-Z]/g, "");
    let guild = client.guilds.get(sanctumId);
    //console.log(guild)
    let errorChannel = guild.channels.find(ch => ch.name === error_channel);
    // Left off at this point - We have successfully gotten into this function and gotten the error message back from the bot. 

    if (!channelid || !tz || !parseInt(channel) || timezone.indexOf('/') === -1) {
        message.channel.send("You are in the error if block");
        errorChannel.send(commontags.stripIndents`
            <@${message.author.id}>, one or more arguments were misformatted or nonexistent.
            Please try again, checking to make sure all arguments were entered correctly.
            Usage: \`${prefix}addclock <voice channel ID> <Linux-formatted timezone name>\`
        `);
        return;
    }

    if (!client.guilds.get(sanctumId).channels.find(ch => ch.id === channelid)) return;

    if (fs.existsSync(`./cronjobs/updateTime${channelid}.js`)) {
        fs.unlinkSync(`./cronjobs/updateTime${channelid}.js`);
    }

    const cronScript =
        `const moment = require('moment');

            module.exports = {
                cronstring: '* * * * *',
                execute(client, logger) {
                    try { client.guilds.get("${guildID}"); } catch(e) {}
                    
                    const clocks = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
                    const halfHourClocks = ['🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'];
                    var timeChannel = client.guilds.get("${guildID}").channels.find(ch => ch.id === "${channelid}");
                    
                    var now = moment.tz('${timezone}');
                    
                    var minute = parseInt(now.format('m'));
                    
                    var hour = parseInt(now.format('h'));
                    
                    var clockEmoji = minute < 30 ? clocks[hour - 1] : halfHourClocks[hour - 1];
                    
                    timeChannel.setName(clockEmoji + " " + now.format('h:mm A zz'));
                }
            }`;

    fs.appendFileSync(`./cronjobs/updateTime${channelid}.js`, cronScript);

    cronEvent = require(`../cronjobs/updateTime${channelid}.js`);
    client.cronJobs.set(cronName, new cronJob(cronEvent.cronstring, () => cronEvent.execute(client, logger), null, true)); // Start the new one.

    message.channel.send(`Clock ${timezone} added!`).then((m) => m.delete(3000));
}

module.exports.conf = {
    name: "addclock"
}