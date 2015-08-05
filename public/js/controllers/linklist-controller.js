'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService',
      function ($scope, LinkService){


        $scope.LinkService = LinkService;
        $scope.bookmarks = [];
        LinkService.getAllBookmarks()
        .success(function (res){
          console.log('res', res);
          $scope.bookmarks = res;
        })
        .error(function (err){
          console.log('err', err);
        })

        // $scope.getAllBookmarks = function (){
        //   console.log('is this working?');
        //   LinkService.getAllBookmarks()
        //   .success(function (res){
        //     console.log('sucess', res);
        //   })
        //   .error(function (err){
        //     console.log('err', err);
        //   })
        // };

        $scope.addABookmark = function(){
          LinkService.addABookmark($scope.new_bookmark)
          .success(function (res){
            console.log('sucess', res);
          })
          .error(function (err){
            console.log('err', err);
          })
        };


      }

    ])