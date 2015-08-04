'use strict'

angular.module('myApp')
  .controller('RegisterLoginController', ['$scope', 'RegisterService', 'LoginService',
    function ($scope, RegisterService, LoginService){
      $scope.RegisterService = RegisterService;
      $scope.LoginService = LoginService;
    }
    ])