var express = require('express');
var app = express();
var db = require('./models');
var bookmarksRoute = require('./routes/bookmarks-router');
var usersRoute = require('./routes/bookmarks-router');
var bodyParser = require('body-parser');


app.use('/api/bookmarks', bookmarksRoute);
app.use('/api/users', usersRoute);

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.listen(3000);