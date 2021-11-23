const db = require('../util/database');

// set up the noticeme model
module.exports = class Noticeme {
	constructor(id, reply, added_by, added_on, updated_on) {
		this.id = id;
		this.reply = reply;
		this.added_by = added_by;
		this.added_on = added_on;
		this.updated_on = updated_on;
	}

	static fetchNumberOfItems() {
		return db.execute(`select count(*) as count from notice_me`);
	}

	static fetchItem(id) {
		return db.execute('select reply from notice_me where id = ?', [ id ]);
	}
};
