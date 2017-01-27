var express = require('express');
var webpack = require('webpack');
var path = require('path');
// var db = require('../db/db.js')
var app = express();
var port = 3000;

module.exports = app;

app.use(express.static(path.join(__dirname, '/../client')));

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

// HANDLE ROUTING
// landing page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

// // user routes
// app.get('/user', function() {
//   /* DO SOMETHING */
//   // render the user page
//   res.send();
// })

// app.post('/user', function() {
//   res.send();
// })
// // host routes
