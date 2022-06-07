var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("qwertyuiop")
});
router.get('/data', function(req, res, next) {
    res.send("name : himani")
  });
module.exports = router;
