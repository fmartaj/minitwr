var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Banane' });
});
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Banane' });
});
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Banane' });
});
module.exports = router;
