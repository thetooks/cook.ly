var router = require('express').Router();

var Sequelize = require('sequelize');
var connection = new Sequelize('cookly', 'root', '');

var Models = require('../cooklydatabase.js');
var User = Models.User;
var Location = Models.Location;
var UserPreference = Models.UserPreference;
var Host = Models.Host;
var Review = Models.Review;
var Menu = Models.Menu;
var Event = Models.Event;
var UserBooking = Models.UserBooking;
var Specialty = Models.Specialty;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.get('/getAllEvents', function(req, res) {
  Host.build({
    FirstName: 'John',
    LastName: 'Smith',
    Address: 'cake street',
  }).save().then(function() {
    res.send('added to database');
  });

  // query the data
  // push the data into events as they come in
});

router.get('/api/allUpcommingEvents', function(req, res) {
  Event.findAll().then(function(data) {
    var list = data.map(item => item);
    res.send(list);
  });
});

module.exports = router;
