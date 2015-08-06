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

      $scope.editBlur = function (){

        sendEditRequest();
      }

      $scope.editKeyUp = function ($event){
        console.log($event.currentTarget.name);

        //13 is the enter key
        if($event.keyCode === 13){
          sendEditRequest();
        }
        console.log('event', $event.keyCode);
      }

      // function to send post req
      function sendEditRequest (){

        console.log('route', $routeParams.id)


      }

  }])