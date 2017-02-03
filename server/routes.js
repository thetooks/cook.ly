var router = require('express').Router();

var Sequelize = require('sequelize');
var connection = new Sequelize('cookly', 'root', '');

var Models = require('../cooklydatabase.js');
var User = Models.User;
var Location = Models.Location;
var Host = Models.Host;
var Review = Models.Review;
var Event = Models.Event;
var UserBooking = Models.UserBooking;

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.get('/getUserEvents', function(req, res) {
  // USER TABLE IS CURRENTLY BROKEN
  // PULL STRAIGHT FROM EVENTS TABLE REGARDLESS OF USER INVOLVEMENT OF THE EVENT

  UserBooking.findAll({
    where: {
      UserId: 1
    }
  }).then(function(events) {
    var data = JSON.stringify(events);
    var parsedData = JSON.parse(data);
    var allIds = parsedData.map(function(event) {
      return {id: event.EventId};
    });
    Event.findAll({
      where: {
        $or: allIds
      }
    }).then(function(events) {
      res.send(JSON.stringify(events));
    });
  });
});

router.get('/getEvents', function(req, res) {
  Event.findAll()
    .then(function(data) {
      res.send(JSON.stringify(data));
    });
});

module.exports = router;