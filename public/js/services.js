'use strict';

angular.module('myApp')
  .service('LinkService', ['$http', LinkService]);

function LinkService($http){

  this.bookmarks = [];

  this.getAllBookmarks = function(){
    var self = this;
    $http.get('/api/bookmarks').then(function (bookmarks){
      self.bookmarks = bookmarks.data;
    });
  }

  this.addABookmark = function(bookmark){
    console.log(bookmark, 'fdsaljkhlk');
    // var nextId = this.bookmarks.length + 1;
    var new_bookmark = {
      title : bookmark.title,
      url : bookmark.url,
      description : bookmark.description,
      user_id : 1,
      topic_id : 1
    }

    // this.bookmarks.push(new_bookmark)

    //Create a http post request and see if data is coming in on the server

    $http.post('/api/bookmarks', new_bookmark).then(function (res){
      console.log('is the post request working?', new_bookmark);
      console.log(res, 'res');
    })

  }

}


// })();