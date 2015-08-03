var express = require('express');
var app = express();

app.use(express.static('./public'));


var links = [
  {
    title : 'The Google',
    url : 'www.google.com',
    description : 'The Google is a place to search of things in the internets',
    topic : 'Research'
  },
  {
    title : 'The Reddit',
    url : 'www.reddit.com',
    description : 'Welcome to the internet\'s rabbit hole',
    topic : 'Research'
  },
  {
    title : 'The Facebook',
    url : 'www.facebook.com',
    description : 'Social Research. Keep tabs on people',
    topic : 'Social'
  },
  {
    title : 'Linked In',
    url : 'www.linkedin.com',
    description : 'Not quite sure the point of this one',
    topic : 'Social'
  }
]


app.listen(3000);