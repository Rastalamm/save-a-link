'use strict'

angular.module('myApp')
    .controller('BookmarksController', ['$scope', 'BookmarkService', 'TopicService',
      function ($scope, BookmarkService, TopicService){

        $scope.BookmarkService = BookmarkService;
        $scope.bookmarks = [];
        BookmarkService.getAllBookmarks()
        .success(function (res){
          console.log('incoming bookmakrs', res);
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

        $scope.addATopic = function (){
          TopicService.addATopic ($scope.new_topic)
          .success(function (res){
            if(res.topicExists){
              console.log('the topic exists');
            }else{
              console.log('new topic added', res);
            }
          })
          .error(function (err){
            console.log('add topic error', err);
          })
        }

        $scope.submitTopicKeyUp = function ($event){
          //13 is the enter key
          if($event.keyCode === 13){
            $scope.addATopic ($scope.new_topic)
            $scope.new_topic = null;
          }
        }


        $('.add_Bookmark_Form').hide();

        $('#add_bookmark_button').on('click', function(){
          $('.add_Bookmark_Form').show();
        });
        $('#submit_new_link_button').on('click', function(){
          $('.add_Bookmark_Form').hide();
        })
        $('#cancel_new_link_button').on('click', function(){
          $('.add_Bookmark_Form').hide();
        })


        $('.add_Topic_Form').hide();

        $('#add_topic_button').on('click', function(){
          $('.add_Topic_Form').show();
        });
        $('#submit_new_topic_button').on('click', function(){
          $('.add_Topic_Form').hide();
        })

      }

    ])