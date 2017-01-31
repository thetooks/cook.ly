var router = require('express').Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

router.get('/getAllEvents', function(req, res){
  var events = 'GRABBING ALL EVENTS';
  // query the data
  // push the data into events as they come in
  res.send(events);
});

module.exports = router;