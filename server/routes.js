var router = require('express').Router();
var Models = require('../cooklydatabase.js');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.get('/api/getUserEvents', function(req, res) {
  Models.connection.query(
    `SELECT
      CONCAT(hs.firstName, ' ', hs.lastName) AS hostName,
      CONCAT(lc.address, ', ', lc.city, ', ', lc.state) AS address,
      ev.cuisine AS theme,
      ev.price,
      ev.startTime AS date,
      ub.UserId AS userId,
      ev.id AS eventId
    FROM
      Events AS ev
      JOIN Hosts AS hs ON hs.id = ev.HostId
      JOIN Locations AS lc ON lc.id = ev.LocationId
      JOIN UserBookings AS ub ON ub.EventId = ev.id
    WHERE
      ub.UserId = 1`,
    {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
});

router.get('/api/getEvents', function(req, res) {
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
      JOIN UserBookings AS ub ON ub.EventId = ev.id`,
      {type: Models.connection.QueryTypes.SELECT}
  ).then(function(data) {
    res.send(data);
  });
});

router.post('/api/userCancelBooking', function(req, res) {
  console.log('INSIDE userCancelBooking Post Request in routes with data: ', req.body);
  var data = req.body;
  Models.UserBooking.destroy({
    where: {
      UserId: data.userId,
      EventId: data.eventId
    }
  })
  .then(function() {
    res.send();
  })
  .catch(err => console.log(err));
});

router.get('/api/allUpcommingEvents', function(req, res) {
  Models.Event.findAll().then(function(data) {
    var list = data.map(item => item);
    res.send(list);
  });
});

router.get('/api/menus', function(req, res) {
  Models.Menu.findAll({
    where: {
      UserId: 3
    }
  })
  .then(function(data) {
    res.send(data);
  })
  .catch(err => console.log(err));
});

router.post('/api/menus', function(req, res) {
  console.log(req.body);
  console.log(JSON.stringify(req.body));
  Models.Menu.create({ UserId: 3, MenuItemDesc: JSON.stringify(req.body) })
  .then(function(task) {
    res.send();
  })
  .catch(err => console.log(err));
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
