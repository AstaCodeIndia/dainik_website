var express = require('express');
// var app = express();
var router = express.Router();
const sendMail = require("../controllers/sendMail.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: '' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: '' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '' });
});

// Form route
router.post("/contact", express.json(), sendMail);

router.get('/blogs', function(req, res, next) {
  res.render('blogs', { title: '' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: '' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: '' });
});

module.exports = router;
