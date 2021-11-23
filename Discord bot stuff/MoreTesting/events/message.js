module.exports = async(client, message) => {
    if(!message.guild || message.author.bot){
        return;
    }
    const prefix = client.config.prefix;
    if(!message.content.startsWith(prefix)){
        return;
    }
    const arguments = message.content.slice(prefix.length).trim().split(/ +/g); // splt on the space
    const command = arguments.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if(!cmd){
        return;
    }
    await cmd.run(client, message, arguments);
};