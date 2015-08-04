'use strict';

angular.module('myApp')
  .service('LinkService', ['$http', LinkService])
  .service('RegisterService', ['$http', RegisterService])
  .service('LoginService', ['$http', LoginService])

function LinkService($http){

  this.bookmarks = [];

  this.getAllBookmarks = function(){

    console.log('something');

    var self = this;

    $http.get('/api/bookmarks').then(function (bookmarks){
      self.bookmarks = bookmarks.data;
    });
  }

  this.addABookmark = function(bookmark){

    var new_bookmark = {
      title : bookmark.title,
      url : bookmark.url,
      description : bookmark.description,
      user_id : 1,
      topic_id : 1
    }

    $http.post('/api/bookmarks', new_bookmark).then(function (res){
      console.log('is the post request working?', new_bookmark);
      console.log(res, 'res');
    })

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