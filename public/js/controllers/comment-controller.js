'use strict'

angular.module('myApp')
  .controller('CommentController', ['$scope', '$routeParams', 'CommentService',
    function ($scope, $routeParams, CommentService){

      // CommentService.showAllComments

      $scope.addAComment = function (){
        CommentService.addAComment($scope.new_comment, $routeParams)
          .success(function (res){
            console.log('Added a comment', res);
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
          console.log('incoming comments', res);

          $scope.comments = res
        })
        .error(function (err){
          console.log('showing comments err', err)
        })






      // $scope.deleteAComment = function (){
      //   var commentId = //something to get comment id
      //   CommentService.deleteAComment(commentId);
      // }
  }])