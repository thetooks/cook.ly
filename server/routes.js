var router = require('express').Router();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

// TESTING GITHUB REBASE BEHAVIOR

module.exports = router;