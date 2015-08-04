var express = require('express');
var app = express();
var db = require('./models');

db.sequelize.sync();

db.User.find().then(function(users){
  console.log(users, 'users');
});


app.use(express.static('./public'));



app.listen(3000);