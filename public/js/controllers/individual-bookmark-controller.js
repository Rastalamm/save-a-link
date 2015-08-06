'use strict'

angular.module('myApp')
  .controller('IndividualBookmarkController', ['$scope', '$routeParams', 'BookmarkService', '$http',
    function ($scope, $routeParams, BookmarkService, $http){
      // $scope.bookmarkId = $routeParams.bookmarks;
      BookmarkService.getOneBookmark($routeParams.id)
      .success(function (res){

        $scope.individualBookmark = res;
      })
      .error(function (){

      })

      $scope.editBlur = function (){

        var inputField = $event.currentTarget.name;
        var inputData = $event.currentTarget.value;

        sendEditRequest(inputField, inputData);
      }

      $scope.editKeyUp = function ($event){

        var inputField = $event.currentTarget.name;
        var inputData = $event.currentTarget.value;

        console.log('value', $event.currentTarget.value);
        //13 is the enter key
        if($event.keyCode === 13){
          sendEditRequest(inputField, inputData);
        }
      }

      // function to send put req
      function sendEditRequest (inputField, inputData){

        var bookmarkId = $routeParams.id;
        var updatedData = {}

        updatedData[inputField] = inputData

        $http.put('/api/bookmarks/' + bookmarkId, updatedData)

        console.log('updatedData', updatedData);
        // console.log('route', $routeParams.id)
      }
  }])