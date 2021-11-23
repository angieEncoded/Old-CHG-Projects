const db = require("../util/database");

module.exports = class xivJob {

    constructor(id, uuid, name, type, abbrv, role, emoji, description, guides, icon, image, added_by, last_modified_by, deleted) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.type = type;
        this.abbrv = abbrv;
        this.role = role;
        this.emoji = emoji;
        this.description = description;
        this.guides = guides;
        this.icon = icon;
        this.image = image;
        this.added_by = added_by;
        this.last_modified_by = last_modified_by;
        this.deleted = deleted;
    }

    static getAllById(id) {
        return db.execute("select * from xiv_jobs where id = ?", [id])
    }

}