var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');

var User = db.User;
var Bookmark = db.Bookmark;
var Topic = db.Topic;
var Comment = db.Comment;

db.sequelize.sync();

// router.use('/', router);

router.get('/', function (req,res){
  console.log('A get request');

})

router.post('/', function (req,res){
  console.log('A post request', req);

})

module.exports = router;