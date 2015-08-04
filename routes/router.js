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
    res.send([
      {
        id : 1,
        title : 'The Google',
        url : 'www.google.com',
        description : 'The Google is a place to search of things in the internets',
        topic : 'Research'
      },
      {
        id : 2,
        title : 'The Reddit',
        url : 'www.reddit.com',
        description : 'Welcome to the internet\'s rabbit hole',
        topic : 'Research'
      },
      {
        id : 3,
        title : 'The Facebook',
        url : 'www.facebook.com',
        description : 'Social Research. Keep tabs on people',
        topic : 'Social'
      },
      {
        id : 4,
        title : 'LinkedIn',
        url : 'www.linkedin.com',
        description : 'Not quite sure the point of this one',
        topic : 'Social'
      }
    ]);
})

router.post('/', function (req,res){
  console.log('A post request', req);
  res.send('YOU tried posting');
})

module.exports = router;

