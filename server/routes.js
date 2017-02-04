var router = require('express').Router();


var Models = require('../cooklydatabase.js');


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
  }
);

  // query the data
  // push the data into events as they come in
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

