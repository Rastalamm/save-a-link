'use strict'

angular.module('myApp')
  .controller('IndividualBookmarkController', ['$scope', '$routeParams', 'BookmarkService',
    function ($scope, $routeParams, BookmarkService){
      // $scope.bookmarkId = $routeParams.bookmarks;
      BookmarkService.getOneBookmark($routeParams.id)
      .success(function (res){
        console.log('Scope', $scope.bookmarks);
        console.log('route id', $routeParams.id);
        console.log('indy response', res)
        $scope.individualBookmark = res;
      })
      .error(function (){

      })
  }])