const db = require("../util/database");

// set up client model
module.exports = class Player {
    constructor(id, discord_id, server, first_name, last_name, lodestone_id) {
        this.id = id;
        this.discord_id = discord_id;
        this.server = server;
        this.first_name = first_name;
        this.last_name = last_name;
        this.lodestone_id = lodestone_id;
    }
    
    save() {
        return db.execute("insert into players (discord_id, server, first_name, last_name, lodestone_id) values (?,?,?,?,?)", [this.discord_id, this.server, this.first_name, this.last_name, this.lodestone_id])
    }

    static deleteUserByDiscordId(discord_id){
        return db.execute("delete from players where discord_id = ?", [discord_id]);
    }

    static selectUserByDiscordId(discord_id){
        return db.execute("select * from players where discord_id = ?", [discord_id]);
    }
}