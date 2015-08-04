var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');

var User = db.User;

db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

 router.get('/', function (req,res){
 //Query db to display all the users

    res.send()

router.post('/', function (req, res){

  // User.find({
  //   where: {username : req.body.username}
  // }).then(function(user){

  //   if (user){
  //     console.log('Its a user!');
  //     res.render("register");
  //   }else{
  //     createUser(req.body.username, req.body.password);
  //     res.redirect("/");
  //   }
  // })

})

module.exports = router;

