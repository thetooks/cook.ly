var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'INSERT_DATABASE_NAME_HERE'
});

connection.connect();

module.exports = connection;