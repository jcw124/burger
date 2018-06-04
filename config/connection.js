// Set up MySQL connection.
const MYSQL = require("mysql");

const CONNECTION = MYSQL.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
CONNECTION.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + CONNECTION.threadId);
});

// Export connection for our ORM to use.
module.exports = CONNECTION;
