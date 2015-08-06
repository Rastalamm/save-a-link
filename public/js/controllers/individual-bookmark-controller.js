'use strict'

angular.module('myApp')
  .controller('IndividualBookmarkController', ['$scope', '$routeParams', 'BookmarkService', '$http', '$location',
    function ($scope, $routeParams, BookmarkService, $http, $location){

      BookmarkService.getOneBookmark($routeParams.id)
      .success(function (res){
        $scope.individualBookmark = res;
      })
      .error(function (err){
        consol.log('get1bookmark err', err);
      })



      $scope.editBlur = function ($event){
        var inputField = $event.currentTarget.name;
        var inputData = $event.currentTarget.value;
        sendEditRequest(inputField, inputData);
      }

      $scope.editKeyUp = function ($event){
        var inputField = $event.currentTarget.name;
        var inputData = $event.currentTarget.value;

        //13 is the enter key
        if($event.keyCode === 13){
          sendEditRequest(inputField, inputData);
        }
      }

      function sendEditRequest (inputField, inputData){

        $scope.title_hidden = false;

        var bookmarkId = $routeParams.id;
        var updatedData = {}
        updatedData[inputField] = inputData

        $http.put('/api/bookmarks/' + bookmarkId, updatedData)
      }

      $scope.deleteBookmark = function (){
        var bookmarkId = $routeParams.id;

        BookmarkService.deleteBookmark(bookmarkId)
        .success(function (res){
          if(res.deleted){
            $location.path('/')
          }
        })
        .error(function (err){
          console.log('delete err', err)
        })
      }

  }])