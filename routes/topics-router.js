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
  Topic.findAll().then(function (topic){
    res.send(topic);
  }).catch(function (err) {
      res.send(err);
      throw err;
  });
})

router.post('/', function (req, res){
  var topicName = req.body.name;

  Topic.findOrCreate({where : {name : topicName}})
    .spread(function (topic, created){
      if(created){
        res.json(topic)
      }else{
        res.json({topicExists: true})
      }
    })
});




module.exports = router;

