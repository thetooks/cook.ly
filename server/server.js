var express = require('express');
// var db = require('../db/db.js')
var app = express();

var port = 3000;

module.exports = app;


// app.use(express.static(__dirname + '/../client'));

// Handle route requests
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
