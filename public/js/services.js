'use strict';

angular.module('myApp')
  .service('BookmarkService', ['$http', BookmarkService])
  .service('RegisterService', ['$http', RegisterService])
  .service('LoginService', ['$http', LoginService])
  .service('LogOutService', ['$http', LogOutService])
  .service('TopicService', ['$http', TopicService])
  .service('AuthService', ['$http', AuthService])

function LogOutService($http){
  this.logUserOut = function (){
    return $http.get('/api/users/logout');
  }
}

function AuthService($http){
  this.checkLoginStatus = function(){
     return $http.get('/api/users/verify');
  }
}


function TopicService($http){
  this.getAllTopics = function (){
    return $http.get('/api/topics');
  }
}

function BookmarkService($http){

  this.getAllBookmarks = function(){

    return $http.get('/api/bookmarks');

  }

  this.getOneBookmark = function(bookmarkId){
    console.log('service consoleof id', bookmarkId);
    return $http.get('/api/bookmarks/' + bookmarkId);
  }

  this.addABookmark = function(bookmark){

    console.log('want to add this', bookmark);

    var new_bookmark = {
      title : bookmark.title,
      url : bookmark.url,
      description : bookmark.description,
      user_id : sessionStorage.getItem('userId'),
      topic_id : bookmark.topic.id
    }

    return $http.post('/api/bookmarks', new_bookmark);

  }

  this.deleteBookmark = function (bookmarkId){
    return $http.delete('/api/bookmarks/' + bookmarkId)
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
      console.log('user nlogin', user_login);

      return $http.post('/api/users/login', user_login);
    }

  }