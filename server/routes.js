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
    var eventIds = parsedData.map(function(event) {
      return {id: event.EventId};
    });

    Event.findAll({
      where: {
        $or: eventIds
      }
    }).then(function(events) {
      var incData = JSON.stringify(events);
      var data = JSON.parse(incData);
      var locationIds = data.map(function(event) {
        return {id: event.LocationId};
      });
      var hostIds = data.map(function(event) {
        return {id: event.HostId};
      });
      
      Location.findAll({
        where: {
          $or: locationIds
        }
      }).then(function(locations) {
        var incLocations = JSON.stringify(locations);

        Host.findAll({
          where: {
            $or: hostIds
          }
        }).then(function(hosts) {
          var incHosts = JSON.stringify(hosts);
          res.send(JSON.stringify([JSON.parse(incData), JSON.parse(incLocations), JSON.parse(incHosts)]));
        });
      });
    });
  });
});

router.get('/getEvents', function(req, res) {
  Event.findAll()
  .then(function(events) {
    var incData = JSON.stringify(events);
    var data = JSON.parse(incData);
    var locationIds = data.map(function(event) {
      return {id: event.LocationId};
    });
    var hostIds = data.map(function(event) {
      return {id: event.HostId};
    });
    
    Location.findAll({
      where: {
        $or: locationIds
      }
    }).then(function(locations) {
      var incLocations = JSON.stringify(locations);

      Host.findAll({
        where: {
          $or: hostIds
        }
      }).then(function(hosts) {
        var incHosts = JSON.stringify(hosts);
        res.send(JSON.stringify([JSON.parse(incData), JSON.parse(incLocations), JSON.parse(incHosts)]));
      });
    });
  });
});

module.exports = router;