'use strict';

(function(){

  function LinkService(){
    this.links = [
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
        title : 'Linked In',
        url : 'www.linkedin.com',
        description : 'Not quite sure the point of this one',
        topic : 'Social'
      }
    ];

    this.getLinks = function(){
      return this.links;
    }

    this.getALink = function(){
      return this.links.filter(function(link){
        return book.id === id;
      })
      .reduce(function(_, link){
        return link;
      });
    }

    this.addALink = function(link){
      var nextId = this.books.length + 1;
      var new_link = {
        id : nextId,
        title : link.title,
        url : link.url,
        description : link.description,
        topic : link.topic
      }

      this.links.push(new_link);
    };
  }


  angular.module('myApp')
    .service('LinkService', LinkService);

})();