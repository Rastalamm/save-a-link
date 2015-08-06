var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var Comment = db.Comment;
var Bookmark = db.Bookmark;


db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));



// router.get('/', function (req,res){
//   console.log('Get list of all bookmarks');
//   Bookmark.findAll({
//     include : [{model : Topic}]
//   }).then(function (bookmarks){

//     res.json(bookmarks);

//   }).catch(function (err) {
//       res.json(err);
//       throw err;
//   });

// })


router.post('/', function (req, res){

  console.log('New comment req', req.body)

  Comment.create({

    body : req.body.body,
    user_id : req.user.id,
    bookmar_id : req.user_id
  }).then(function (comment){

    Comment.findOne({where : {id :comment.id}})
    .then(function (comment){
      res.json(comment);
    })
  })
})

// router.get('/:id', function (req, res){
//   var bookmarkId = req.params.id;
//   console.log (bookmarkId, 'bookmark iddd');

//   Bookmark.findOne({where : {id :bookmarkId},
//     include : [{model : Topic}]})
//   .then(function (bookmark){
//     res.json(bookmark)
//   })
// })


// router.put('/:id', function (req, res){
//   var bookmarkId = req.params.id;

//   Bookmark.findOne({where : {id :bookmarkId},
//     include : [{model : Topic}]})
//   .then(function (bookmark){
//     bookmark.updateAttributes({
//       title : req.body.title,
//       url : req.body.url,
//       description : req.body.description
//     })
//     .then(function (bookmark){
//       res.json(bookmark)
//     })
//   })
// })

// router.delete('/:id', function (req, res){
//   var bookmarkId = req.params.id;

//   Bookmark.findById(bookmarkId).then(function (bookmark){
//     if(bookmark){
//       bookmark.destroy().then(function (){
//         res.json({deleted : true})
//       })
//     }else{
//       res.json({deleted : false})
//     }

//   })


// })


module.exports = router;

