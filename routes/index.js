/* code d'avant 
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Peep' });
});

module.exports = router;
*/


var express = require('express');
var router = express.Router();

var tweets = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});


router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express', tweets: tweets });
});

router.post('/', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('/')
});

router.post('/user', function(req, res, next) {
    tweets.unshift(req.body.tweet);
    res.redirect('user')
});

module.exports = router;
