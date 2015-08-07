'use strict'

angular.module('myApp')
  .controller('RegisterLoginController', ['$scope', 'RegisterService', 'LoginService', '$location',
    function ($scope, RegisterService, LoginService, $location){
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
      };

      $scope.loginUser = function (){

        LoginService.loginUser ($scope.login_user)
        .success(function (res){
          console.log('response', res);
          if(res){
            // $scope.loginMessage = 'success'
            $location.path('/');
          }else{
            $scope.loginMessage = 'Username or Password is incorrect'
          }
        })
        .error(function (err) {
          console.log('ERROR', err);
        })
      }

      $('.register_container').hide();

      $('#login_to_register_link').on('click', function (){
        $('.login_container').hide();
        $('.register_container').show();
      })

      $('#register_to_login_link').on('click', function (){
        $('.login_container').show();
        $('.register_container').hide();
      })

    }
  ])