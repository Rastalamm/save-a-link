var express = require('express');
var app = express();
var db = require('./models');
var routes = require('./routes/router');
var bodyParser = require('body-parser');



app.use('/api/users', routes);
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.listen(3000);