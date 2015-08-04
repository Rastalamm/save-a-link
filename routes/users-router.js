var express = require('express');
// var app = express();
var router = express.Router();
var db = require('../models');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');

var User = db.User;

db.sequelize.sync();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));


function makeHash (password){

  var shasum = crypto.createHash('sha256');
  shasum.update(password);

  hashWord = shasum.digest('hex');

  return hashWord;
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}

function makeHash (password){

  var shasum = crypto.createHash('sha256');
  shasum.update(password);

  hashWord = shasum.digest('hex');

  return hashWord;
}

function createUser (username, password){

  User.create({
    username : username,
    password : makeHash(password)
  })
}


router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/'}));

router.get('/login', function (req, res) {
  res.render("login", { user: req.user} );
});

router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});

router.post('/register', function (req, res) {

  User.find({
    where: {username : req.body.username}
  }).then(function(user){

    if (user){
      console.log('Its a user!');
      res.render("register");
    }else{
      createUser(req.body.username, req.body.password);
      res.redirect("/");
    }
  })
});

router.get('/register', function (req, res) {
  res.redirect("/");
});




router.get('/', function (req,res){
//Query db to display all the users

  res.send()
}

router.post(  '/', function (req, res){

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

