'use strict';

angular.module('myApp')
  .service('BookmarkService', ['$http', BookmarkService])
  .service('RegisterService', ['$http', RegisterService])
  .service('LoginService', ['$http', LoginService])
  .service('LogOutService', ['$http', LogOutService])
  .service('TopicService', ['$http', TopicService])
  .service('AuthService', ['$http', AuthService])
  .service('CommentService', ['$http', CommentService])


function CommentService($http){
  this.showAllComments = function (bookmarkId){
    var bookmark_id = bookmarkId.id;
    return $http.get('/api/comments/' + bookmark_id);
  }

  this.addAComment = function (comment, bookmark_id){
    var new_comment = {
      body: comment.body,
      user_id : sessionStorage.getItem('userId'),
      bookmark_id : bookmark_id.id
    }
    return $http.post('/api/comments/', new_comment);
  }

  this.deleteAComment = function (commentId){
    return $http.delete('/api/comments/' + commentId);
  }

}

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

  this.addATopic = function (new_topic){
    return $http.post('/api/topics', new_topic);
  }
}

function BookmarkService($http){

  this.getAllBookmarks = function(){
    return $http.get('/api/bookmarks');
  }

  this.getOneBookmark = function(bookmarkId){
    return $http.get('/api/bookmarks/' + bookmarkId);
  }

  this.addABookmark = function(bookmark){
    console.log('THE ID', bookmark.topic.id);
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