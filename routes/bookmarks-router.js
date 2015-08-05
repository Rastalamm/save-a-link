var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var Bookmark = db.Bookmark;
var Topic = db.Topic;


db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));



router.get('/', function (req,res){
  console.log('Get list of all bookmarks');
  Bookmark.findAll({
    include : [{model : Topic}]
  }).then(function (bookmarks){

    res.json(bookmarks);

  }).catch(function (err) {
      res.json(err);
      throw err;
  });

})




router.post('/', function (req, res){
  Bookmark.create({
    title : req.body.title,
    url : req.body.url,
    description : req.body.description,
    user_id : req.user.id,
    topic_id : req.body.topic_id
  }).then(function (bookmark){

    Bookmark.findOne({where : {id :bookmark.id},
      include : [{model : Topic}]})
    .then(function (bookmark){
      res.json(bookmark);
    })
  })
})

router.get('/:id', function (req, res){
  var bookmarkId = req.params.id;
  console.log (bookmarkId, 'bookmark iddd');

  Bookmark.findOne({where : {id :bookmarkId}})
    .then(function (bookmark){
      res.json(bookmark)
  })
})

module.exports = router;

