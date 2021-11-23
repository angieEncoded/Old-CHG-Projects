const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DBHOST,
    user: process.env.DBUSERNAME,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD
});

module.exports = pool.promise();