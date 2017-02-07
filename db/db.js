var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cookly'
});

connection.connect(function () {
  console.log(' you are now connected to the database.');
});


module.exports = connection;
