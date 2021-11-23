const noticeme = require(`../models/Noticemesenpai`);
module.exports.run = (client, message) => {
	noticeme
		.fetchNumberOfItems()
		.then(([ rows, metadata ]) => {
			const count = rows[0].count;
			return Math.floor(Math.random() * count);
		})
		.then((results) => {
			return noticeme.fetchItem(results);
		})
		.then(([ rows, metadata ]) => {
			message.delete();
			// It was physically painful to have to do it this way
			merlwybReply = '`' + rows[0].reply + '`';
			message.channel.send(merlwybReply);
			message.channel.stopTyping();
		})
		.catch((error) => {
			message.channel.send('There was a catastrophic failure. <@109423249477095424> we need help!');
			logger.log({ level: 'info', message: error });
			message.channel.stopTyping();
		});
};

module.exports.conf = {
	name: 'noticemesenpai'
};
