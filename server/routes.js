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

router.get('/api/allUpcommingEvents', function(req, res) {
  Event.findAll().then(function(data) {
    var list = data.map(item => item);
    res.send(list);
  });
});

var doesEntryExist = function (model, column, value, callback) {
  var obj = {};
  obj[column] = value;
  model.findOne({'attributes': ['id'], where: obj})
  .then(function(model) {
    if (!model) {
      callback(false, undefined);
    } else {
      callback(true, model.dataValues.id);
    }
  });
};  

router.post('/api/postevent', function (req, res) {
  res.statusCode = 201;
  console.log(req.body);
  var startTime = req.body.startTime;
  var endTime = req.body.endTime;
  var day = req.body.day;
  var time = req.body.time;
  var week = req.body.week;
  var month = req.body.month;
  var cuisine = req.body.cuisine;
  var address = req.body.address;
  var city = req.body.city;
  var state = req.body.state;
  var maxseats = req.body.maxseats;
  var title = req.body.title;
  var description = req.body.description;

  doesEntryExist(Location, 'City', city, function (cityBool, id) {
    Event.build({
      'cuisine': cuisine,
      'address': address,
      'maxSeats': maxseats,
      'startTime': new Date(2017, 1, 8, 17),
      'endTime': new Date(2017, 2, 8, 17),
      'day': day,
      'time': time,
      'week': week,
      'month': month,
      'title': title,
      'description': description,
    }).save().then(function (event) {
      if (cityBool) {
        event.update({'LocationId': id});
      }
      if (!cityBool) {
        Location.build({
          'city': city,
          'state': state,
          'address': address
        }).save().then(function (location) {
          event.update({'LocationId': location.get('id')});
        });
      }
      res.send({'eventStatus': 'created'});
    });
  });
});

module.exports = router;
