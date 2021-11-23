const Discord = require("discord.js"); 
const client = new Discord.Client();
const {Authentication} = require("./util/config.json")
const randomStuff = require("./fun/randomStuff.js");

let commands = new Map();
commands.set("random", randomStuff.random);
commands.set("reply", randomStuff.saySomething)

client.on("message", message => {
	if (message.content[0] === "?") {
		console.log(message.content[0])
		const command = message.content.split(" ")[0].substr(1) // get the command name
		if(commands.has(command)) {
			commands.get(command)(message);
		}
	}
})







client.login(Authentication.discordBotToken); 