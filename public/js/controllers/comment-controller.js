'use strict'

angular.module('myApp')
  .controller('CommentController', ['$scope', '$routeParams', 'CommentService',
    function ($scope, $routeParams, CommentService){

      $scope.submitBlur = function ($event){
        $scope.addAComment($scope.new_comment, $routeParams)
        $scope.new_comment = null;
      }

      $scope.submitKeyUp = function ($event){
        //13 is the enter key
        if($event.keyCode === 13){
          $scope.addAComment($scope.new_comment, $routeParams)
          $scope.new_comment = null;
        }
      }

      $scope.addAComment = function (){
        CommentService.addAComment($scope.new_comment, $routeParams)
          .success(function (res){
            console.log(res);
            $scope.comments.push(res);
          })
          .error(function (err){

          })
      }

      //show a comment
      $scope.CommentService = CommentService;
      $scope.comments = [];
      CommentService.showAllComments($routeParams)
        .success(function (res){
          $scope.comments = res
        })
        .error(function (err){
          console.log('showing comments err', err)
        })

      $scope.deleteAComment = function ($event){
        var commentId = $event.currentTarget.id;
        console.log('event', $event.currentTarget.id);
        CommentService.deleteAComment(commentId)
        .success(function (res) {
          if(res.deleted){
            var commentsArray = $scope.comments;
            commentsArray.forEach(function (curr, index){
              if(curr.id == res.commentId){
                commentsArray.splice(index,1)
              }
            })
          }
        })
        .error(function (err){
          console.log('delete commment err', err);
        })
      }

  }])