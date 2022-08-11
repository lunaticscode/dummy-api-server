require("dotenv").config();
const mysql = require("mysql2");
const db_connection = mysql.createConnection(process.env.PLANET_DB_URL);
module.exports = db_connection;
