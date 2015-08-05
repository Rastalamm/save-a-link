'use strict'

angular.module('myApp')
  .controller('NavController', ['$scope', 'LogOutService', '$location',
    function ($scope, LogOutService, $location){
      $scope.logUserOut = function (){
        LogOutService.logUserOut().then(function (res){
          $location.path('/register');
        })
      }
    }
  ])