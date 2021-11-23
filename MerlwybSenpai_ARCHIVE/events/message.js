const Discord = require('discord.js');
module.exports = async (client, message) => {
	if (!message.guild || message.author.bot) {
		return;
	}

	if (!message.content.startsWith(process.env.PREFIX)) {
		return;
	}
	const arguments = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g); // splt on the space
	const command = arguments.shift().toLowerCase();

	const cmd = client.commands.get(command);
	if (!cmd) {
		return;
	}
	await cmd.run(client, message, arguments);
};
