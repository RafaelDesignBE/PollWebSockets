var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Sockets Poll' });
});

/* GET create poll page. */
router.get('/createpoll', function(req, res, next) {
  res.render('createpoll', { title: 'Create poll' });
});

module.exports = router;
