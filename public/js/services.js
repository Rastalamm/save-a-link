'use strict';

angular.module('myApp')
  .service('LinkService', ['$http', LinkService])
  .service('RegisterService', ['$http', RegisterService])
  .service('LoginService', ['$http', LoginService])

function LinkService($http){

  // this.bookmarks = [];

  this.getAllBookmarks = function(){

    console.log('get the bookmarks');

    // var self = this;

    return $http.get('/api/bookmarks');
    // .then(function (bookmarks){
    //   self.bookmarks = bookmarks.data;
    // });
  }

  this.addABookmark = function(bookmark){

    console.log(bookmark)

    var new_bookmark = {
      title : bookmark.title,
      url : bookmark.url,
      description : bookmark.description,
      user_id : 1,
      topic_id : bookmark.topic
    }

    return $http.post('/api/bookmarks', new_bookmark);

  }

}

  function RegisterService($http){

    this.createUser = function (new_user){

      console.log('new_user', new_user);
      var new_register = {
        username : new_user.username,
        password : new_user.password
      };

      return $http.post('/api/users/register', new_register);
    }
  }

  function LoginService($http){


    this.loginUser = function (login_user){

      var user_login = {
        username : login_user.username,
        password : login_user.password
      };

      return $http.post('/api/users/login', user_login);
    }

  }