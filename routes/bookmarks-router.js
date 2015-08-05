var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var Bookmark = db.Bookmark;


db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));





router.get('/', function (req,res){

  console.log('Get list of all bookmarks');

  Bookmark.findAll().then(function (bookmarks){
    res.send(bookmarks);

  }).catch(function (err) {
      res.send(err);
      throw err;
  });

})




router.post('/', function (req, res){

  Bookmark.create({
    title : req.body.title,
    url : req.body.url,
    description : req.body.description
    // user_id : req.body.user_id,
    // topic_id : req.body.topic_id
  })

  res.send('Success');

})

module.exports = router;

