const db = require("../util/database");
const { add } = require("../util/logger");


module.exports = class Duty {
  constructor(id, uuid, name, description, content_difficulty, number_of_players, default_roles, image, xpac, added_by, last_modified_by, deleted) {
    this.id = id;
    this.uuid = uuid;
    this.name = name;
    this.description = description;
    this.content_difficulty = content_difficulty;
    this.number_of_players = number_of_players;
    this.default_roles = default_roles;
    this.image = image;
    this.xpac = xpac;
    this.added_by = added_by;
    this.last_modified_by = last_modified_by;
    this.deleted = deleted;
  }

  save() {
    return db.execute(
      "insert into duties (id, duty_name, description, content_level, number_of_players, image, xpac, added_by) values (?,?,?,?,?,?,?,?)",
      [
        this.id,
        this.duty_name,
        this.description,
        this.content_level,
        this.number_of_players,
        this.image,
        this.xpac,
        this.added_by,
      ]
    );
  }

  update() {
    return db.execute(
      "update duties set duty_name = ?, description = ?, content_level = ?, number_of_players = ?, image = ?, xpac = ?, updated_by = ? where id = ?",
      [
        this.duty_name,
        this.description,
        this.content_level,
        this.number_of_players,
        this.image,
        this.xpac,
        this.updated_by,
        this.id,
      ]
    );
  }

  updateNoImage() {
    return db.execute("update duties set duty_name = ?, description = ?, content_level = ?, number_of_players = ?, xpac = ?, updated_by = ? where id = ?",
      [
        this.duty_name,
        this.description,
        this.content_level,
        this.number_of_players,
        this.xpac,
        this.updated_by,
        this.id,
      ])
  }


  // number of records
  static count() {
    return db.execute("select count(*) as numberOfRecords from duties where deleted != 1");
  }

  static getAllDutiesPagination(limit, offset) {
    return db.execute(
      //(id, uuid, name, description, content_difficulty, number_of_players, default_roles, image, xpac, added_by, last_modified_by, deleted)
      "select id, uuid, name, description, content_difficulty, number_of_players, default_roles, image, xpac, added_by, last_modified_by from duties where deleted != '1' order by created_on desc limit ? offset ?", [limit, offset]);
  }




  static getDutyById(id) {
    return db.execute("select id, duty_name, description, image, xpac, content_level, number_of_players, created_on, updated_on, added_by from duties where id = ?", [id])
  }
  static getImageById(id) {
    return db.execute("select image from duties where id = ?", [id])
  }

  static deleteById(id) {
    return db.execute('delete from duties where id = ?', [id])
  }

}