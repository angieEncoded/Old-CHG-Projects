
const randomStuff = {}

randomStuff.random = (message) => {
	const number = Math.floor(Math.random() * 10 ) + 1;
	message.channel.send(number.toString());
}

randomStuff.saySomething = (message) => {
	message.channel.send("This is a reply.")
}

module.exports = randomStuff;
