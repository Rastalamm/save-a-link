'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService', 'TopicService',
      function ($scope, LinkService, TopicService){

        $scope.LinkService = LinkService;
        $scope.bookmarks = [];
        LinkService.getAllBookmarks()
        .success(function (res){

          $scope.bookmarks = res;
        })
        .error(function (err){
          console.log('err', err);
        })

        $scope.addABookmark = function(){
          $scope.bookmarks.push($scope.new_bookmark);
          LinkService.addABookmark($scope.new_bookmark)
          .success(function (res){
            console.log('sucess', res);
          })
          .error(function (err){
            console.log('err', err);
          })
        };

      // $scope.TopicService = TopicService;
      $scope.topics = [];
      TopicService.getAllTopics()
      .success(function (res){
        console.log('topics', res)
        $scope.topics = res;
      })
      .error(function (err){
        console.log('err', err);
      })

      }

    ])