'use strict'

angular.module('myApp')
    .controller('BookmarksController', ['$scope', 'BookmarkService', 'TopicService',
      function ($scope, BookmarkService, TopicService){

        $scope.BookmarkService = BookmarkService;
        $scope.bookmarks = [];
        BookmarkService.getAllBookmarks()
        .success(function (res){

          $scope.bookmarks = res;
        })
        .error(function (err){
          console.log('err', err);
        })

        $scope.addABookmark = function(){

          BookmarkService.addABookmark($scope.new_bookmark)

          .success(function (res){
            console.log('sucess', res);
            $scope.bookmarks.push(res)

          })
          .error(function (err){
            console.log('err', err);
          })
        };


        $scope.topics = [];
        TopicService.getAllTopics()
        .success(function (res){

          $scope.topics = res;
        })
        .error(function (err){
          console.log('err', err);
        })


        $('.add_Bookmark_Form').hide();

        $('#add_bookmark_button').on('click', function(){
          $('.add_Bookmark_Form').show();
        });
        $('#submit_new_link_button').on('click', function(){
          $('.add_Bookmark_Form').hide();
        })




      }

    ])