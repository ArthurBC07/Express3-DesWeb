var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
});

router.get('/cool/beach', function(req, res, next) {
  res.send("I'm love beach");
});

router.get('/ifc', function(req, res, next) {
  res.send("Welcome to IFC!");
});

router.get('/desweb3', function(req, res, next) {
  res.send("Vou tirar 10 nessa disciplina!");
});



module.exports = router;
