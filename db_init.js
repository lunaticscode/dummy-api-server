require("dotenv").config();
const mysql = require("mysql2");
const db_connection = mysql.createPool({
  uri: process.env.PLANET_DB_URL,
  isServer: false,
});
module.exports = db_connection;
