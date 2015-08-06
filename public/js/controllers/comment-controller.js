'use strict'

angular.module('myApp')
  .controller('CommentController', ['$scope', '$routeParams', 'CommentService',
    function ($scope, $routeParams, CommentService){

      // CommentService.showAllComments

      $scope.addAComment = function (){
        CommentService.addAComment($scope.new_comment, $routeParams);
      }

      //show a comment

      //Add a comment




      // $scope.deleteAComment = function (){
      //   var commentId = //something to get comment id
      //   CommentService.deleteAComment(commentId);
      // }
  }])