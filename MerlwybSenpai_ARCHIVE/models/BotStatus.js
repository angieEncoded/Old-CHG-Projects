const db = require('../util/database');

// set up the noticeme model
module.exports = class BotStatus {
	constructor(id, type, activity, added_by, added_on, updated_on) {
		this.id = id;
		this.type = type;
		this.activity = activity;
		this.added_by = added_by;
		this.added_on = added_on;
		this.updated_on = updated_on;
	}

	static fetchNumberOfItems() {
		return db.execute(`select count(*) as count from bot_status`);
	}

	static fetchItem(id) {
		return db.execute('select type, activity  from bot_status where id = ?', [ id ]);
	}
};
