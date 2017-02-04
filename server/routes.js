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

module.exports = router;
