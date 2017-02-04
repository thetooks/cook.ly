var express = require('express');
var path = require('path');
var router = require('./routes.js');
// var db = require('../db/db.js')
var app = express();
var port = 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

app.use(express.static(path.join(__dirname, '/../client')));

// HANDLE ROUTING
app.use('/', router);

module.exports = app;





