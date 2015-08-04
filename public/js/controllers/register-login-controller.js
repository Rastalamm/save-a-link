'use strict'

angular.module('myApp')
  .controller('RegisterLoginController', ['$scope', 'RegisterService', 'LoginService',
    function ($scope, RegisterService, LoginService){
      $scope.RegisterService = RegisterService;
      $scope.LoginService = LoginService;
      $scope.createUser = function (){

        RegisterService.createUser($scope.new_user)
        .success(function (res){
          console.log('response', res);
          if(res){
            $scope.registerMessage = 'success'
          }else{
            $scope.registerMessage = 'Username has been taken'
          }

        })
        .error(function (err){
          console.log('ERROR', err);
        });



      }

    }
  ])