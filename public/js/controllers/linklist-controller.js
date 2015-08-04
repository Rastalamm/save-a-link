'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService',
      function($scope, LinkService){
        $scope.bookmarks = [];
        LinkService.getAllBookmarks().then(function (bookmarks){
          $scope.bookmarks = bookmarks.data;
          console.log($scope.bookmarks);
        })
      }
    ])