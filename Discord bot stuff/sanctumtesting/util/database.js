const mysql = require("mysql2");
const details = require("../config.json");

// Change all these to env variables
const pool = mysql.createPool({
    host: details.dbloc,
    user: details.dbuser,
    database: details.dbname,
    password: details.dbpass
});

module.exports = pool.promise();