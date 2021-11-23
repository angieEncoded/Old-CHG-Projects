module.exports.run = (client, msg) => {
    return msg.channel.send("whatever");
}

module.exports.conf = {
    name: "ping"
}