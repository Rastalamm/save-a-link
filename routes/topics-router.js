var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var Topic = db.Topic;


db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));


router.get('/', function (req,res){

  console.log('Get list of all topics');

  Topic.findAll().then(function (topic){
    res.send(topic);

  }).catch(function (err) {
      res.send(err);
      throw err;
  });

})




module.exports = router;

