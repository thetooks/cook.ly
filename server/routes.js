var router = require('express').Router();
var Models = require('../cooklydatabase.js');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.get('/login', function(req, res) {
  res.redirect('/');
});

router.get('/api/getUserEvents', function(req, res) {
  Models.connection.query(
    `SELECT
      CONCAT(hs.firstName, ' ', hs.lastName) AS hostName,
      CONCAT(lc.address, ', ', lc.city, ', ', lc.state) AS address,
      ev.cuisine AS theme,
      ev.price,
      ev.startTime AS date
    FROM
      Events AS ev
      JOIN Hosts AS hs ON hs.id = ev.HostId
      JOIN Locations AS lc ON lc.id = ev.LocationId
      JOIN UserBookings AS ub ON ub.EventId = ev.id
    WHERE
      ub.UserId = 1`,
    {type: Models.connection.QueryTypes.SELECT})
  .then(function(data) {
    res.send(data);
  });
});

router.get('/getEvents', function(req, res) {
  Models.Event.findAll()
  .then(function(events) {
    var incData = JSON.stringify(events);
    var data = JSON.parse(incData);
    var locationIds = data.map(function(event) {
      return {id: event.LocationId};
    });
    var hostIds = data.map(function(event) {
      return {id: event.HostId};
    });
    
    Models.Location.findAll({
      where: {
        $or: locationIds
      }
    }).then(function(locations) {
      var incLocations = JSON.stringify(locations);

      Models.Host.findAll({
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
  Models.Event.findAll().then(function(data) {
    var list = data.map(item => item);
    res.send(list);
  });
});

router.get('/api/menus/:email', function(req, res) {
  Models.Host.findOne({ where: {email: req.params.email} }).then(function(Host) {
    
    Models.Menu.findAll({
      where: {
        HostId: Host.id
      }
    })
    .then(function(data) {
      res.send(data);
    })
    .catch(err => console.log(err));
  });
  
});

router.post('/api/menus/:email', function(req, res) {
  
  Models.Host.findOne({ where: {email: req.params.email} }).then(function(Host) {
    console.log(Host.id);
    Models.Menu.create({ HostId: Host.id, MenuItemDesc: JSON.stringify(req.body) })
    .then(function(task) {
      res.send();
    })
    .catch(err => console.log(err));
  });
  
});

router.post('/api/hosts', function(req, res) {
  Models.Host.findOne( {where: {email: req.body.email}})
  .then(function(Host) {
    if (!Host) {
      Models.Host.create( {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email} )
      .then(function() {
        res.send();
      }); 
    }
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
