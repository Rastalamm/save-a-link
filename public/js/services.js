'use strict';

(function(){

  function LinkService(){
    this.bookmarks = [
      {
        id : 1,
        title : 'The Google',
        url : 'www.google.com',
        description : 'The Google is a place to search of things in the internets',
        topic : 'Research'
      },
      {
        id : 2,
        title : 'The Reddit',
        url : 'www.reddit.com',
        description : 'Welcome to the internet\'s rabbit hole',
        topic : 'Research'
      },
      {
        id : 3,
        title : 'The Facebook',
        url : 'www.facebook.com',
        description : 'Social Research. Keep tabs on people',
        topic : 'Social'
      },
      {
        id : 4,
        title : 'LinkedIn',
        url : 'www.linkedin.com',
        description : 'Not quite sure the point of this one',
        topic : 'Social'
      }
    ];

    this.getLinks = function(){
      return this.bookmarks;
    };

    this.getALink = function(){
      return this.bookmarks.filter(function(bookmark){
        return bookmark.id === id;
      })
      .reduce(function(_, bookmark){
        return bookmark;
      });
    };

    this.addALink = function(bookmark){
      var nextId = this.bookmarks.length + 1;
      var new_bookmark = {
        id : nextId,
        title : bookmark.title,
        url : bookmark.url,
        description : bookmark.description,
        topic : bookmark.topic
      }

      this.bookmarks.push(new_bookmark);
    };
  };


  angular.module('myApp')
    .service('LinkService', LinkService);

})();