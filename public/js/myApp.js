'use strict'

angular.module('myApp', [
  'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

    // $locationProvider.html5Mode({
    //   enabled : true,
    //   requireBase : false
    // });

    $routeProvider
      .when('/', {
        templateUrl : 'views/linklist.html',
        controller : 'LinksController'
      })
      .when('/individual', {
        templateUrl : 'views/individual-post.html'
      })
      .when('/register', {
        templateUrl : 'views/register-login.html',
        controller : 'RegisterLoginController'
      })
      .otherwise({
        templateUrl : 'views/404.html'
      })
  }])
  .run(function(){

  })