'use strict'

angular.module('myApp')
  .controller('IndividualBookmarkController', ['$scope', '$routeParams', 'BookmarkService',
    function ($scope, $routeParams, BookmarkService){
      // $scope.bookmarkId = $routeParams.bookmarks;
      BookmarkService.getOneBookmark($routeParams.id)
      .success(function (res){

        $scope.individualBookmark = res;
      })
      .error(function (){

      })
  }])