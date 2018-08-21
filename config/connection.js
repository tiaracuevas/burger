// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "qtsieqr9po82m7mp",
  password: "exnobypg6hc4nfkp",
  database: "yluvc61z7wzt07u1"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


// Property	Value	Action
// Host	g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
// Username	qtsieqr9po82m7mp	
// Password	exnobypg6hc4nfkp	
// Port	3306	
// Database	yluvc61z7wzt07u1