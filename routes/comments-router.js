var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var Comment = db.Comment;
var User = db.User;


db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));


router.get('/:id', function (req, res){
  var bookmarkId = req.params.id;
  Comment.findAll({where : {bookmark_id : bookmarkId},
    include : [{model : User, attributes : ['username']}]})
  .then(function (comments){
    res.json(comments);
  }).catch(function (err) {
      res.json(err);
      throw err;
  });
})

router.post('/', function (req, res){
  Comment.create({
    body : req.body.body,
    user_id : req.body.user_id,
    bookmark_id : req.body.bookmark_id
  }).then(function (comment){
    Comment.findOne({where : {id :comment.id},
      include : [{model : User, attributes : ['username']}]})
    .then(function (comment){
      res.json(comment);
    })
  })
})

router.delete('/:id', function (req, res){
  var commentId = req.params.id;

  Comment.findById(commentId).then(function (comment){
    if(comment){
      comment.destroy().then(function (){
        res.json({deleted : true, commentId : commentId})
      })
    }else{
      res.json({deleted : false})
    }
  })
})


module.exports = router;

