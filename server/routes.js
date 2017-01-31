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

router.get('/getAllEvents', function(req, res){
  Event.build({
      Cuisine: 'Rainbow Cake',
      MaxsSeats: 20,
      Address: 'Cake Street, Rainbow Unicorn Island'
    }).save().then(function() {
      res.send('Event added!');
    });

  // query the data
  // push the data into events as they come in
});

router.get('/getUserEvents', function(req, res) {
  // USER TABLE IS CURRENTLY BROKEN
  // PULL STRAIGHT FROM EVENTS TABLE REGARDLESS OF USER INVOLVEMENT OF THE EVENT

  Event.findAll({
    where: {
      Cuisine: 'Rainbow Cake'
    }
  }).then(function(data) {
    res.send(JSON.stringify(data));
  });

});

module.exports = router;