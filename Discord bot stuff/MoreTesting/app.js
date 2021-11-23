const Discord = require("discord.js");
const client  = new Discord.Client();
const fs = require("fs");
const {promisify} = require("util"); // require the promise library
const readDirectory = promisify(fs.readdir);
client.commands = new Discord.Collection();
client.config = require("./config.json");
const cronJob = require('cron').CronJob; // For cyclical actions and for alerts
client.cronJobs = new Discord.Collection();
const cronFiles = fs.readdirSync('./cronjobs').filter(file => file.endsWith('.js')); // Load cron plugins
const winston = require('winston'); // Fast logging

const logger = winston.createLogger({ // Start winston logging
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: `logs/log${Math.floor(Date.now() / 1000)}.txt` }), // Output to file
    ],
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'HH:mm:ss'
        }),
        winston.format.printf(log => `[${log.timestamp}][${log.level.toUpperCase()}] - ${log.message}`),
    ),
});


// Set up the project to run commands and events
const load = async () => {
    const cmdFiles = await readDirectory("./commands/");
    cmdFiles.forEach(file => {
        try {
            const f = require(`./commands/${file}`)
            if (file.split(".").slice(-1)[0] !== "js") { // check the filename
                return;
            }
            client.commands.set(f.conf.name, f);
            //console.log(client.commands);
        } catch (error) {
            //console.log(error);
        }
    })

    const eventFiles = await readDirectory("./events/");
    eventFiles.forEach(file => {
        if (file.split(".").slice(-1)[0] !== "js") { // check the filename
            return;
        }
        const eventName = file.split(".")[0];
        const event = require(`./events/${file}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    })
}

// This cron function is for the clock
for (const file of cronFiles) { // Load crons
    const cronEvent = require(`./cronjobs/${file}`);
    cronName = file.substr(0, file.indexOf('.'));
    client.cronJobs.set(cronName, new cronJob(cronEvent.cronstring, () => cronEvent.execute(client, logger), null, true));
}

// This will actually bring the bot online
client.login(client.config.token);

// Exectute the function that deals with commands
load();