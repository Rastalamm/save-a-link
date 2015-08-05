var express = require('express');
var app = express();
var db = require('./models');
var bookmarksRoute = require('./routes/bookmarks-router');
var usersRoute = require('./routes/users-router');
var topicsRoute = require('./routes/topics-router');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');




app.use('/api/bookmarks', bookmarksRoute);
app.use('/api/users', usersRoute);
app.use('/api/topics', topicsRoute);


app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use(session(
  {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(
    function(user) {
      done(null, user);
    });
});


passport.use(new LocalStrategy(
  function(username, password, done) {
      User.findOne({
        where: { username: username }
      }).then(function(user) {

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !==  makeHash(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    }).catch(function (err) {
        return done(err, null);
        throw err;
      });
  }
));



app.listen(3000);