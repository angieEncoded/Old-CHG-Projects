const logger = require('../util/logging.js');
const BotStatus = require('../models/BotStatus');

module.exports = async (client) => {
	setInterval(() => {
		BotStatus.fetchNumberOfItems()
			.then(([ rows, metadata ]) => {
				return rows[0].count;
			})
			.then((count) => {
				return BotStatus.fetchItem(Math.floor(Math.random() * count) + 1);
			})
			.then(([ rows, metadata ]) => {
				client.user.setActivity(rows[0].activity, { type: rows[0].type });
			})
			.catch((error) => {
				logger.log({ level: 'error', message: error });
			});
	}, 3600000); // 1 hr in milliseconds = 3600000
	logger.log({ level: 'info', message: 'Bot is online' });
};
