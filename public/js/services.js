'use strict';

angular.module('myApp')
  .service('LinkService', ['$http', LinkService])
  .service('RegisterService', ['$http', RegisterService])
  .service('LoginService', ['$http', LoginService])
  .service('TopicService', ['$http', TopicService])

function TopicService($http){
  this.getAllTopics = function (){
    return $http.get('/api/topics');
  }
}

function LinkService($http){

  this.getAllBookmarks = function(){

    return $http.get('/api/bookmarks');

  }

  this.addABookmark = function(bookmark){

    console.log('bookmark', bookmark);

    var new_bookmark = {
      title : bookmark.title,
      url : bookmark.url,
      description : bookmark.description,
      // user_id : 1,
      topic_id : bookmark.topic.id
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
      console.log('user nlogin', user_login);

      return $http.post('/api/users/login', user_login);
    }

  }