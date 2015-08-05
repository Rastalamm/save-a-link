'use strict'

angular.module('myApp', [
  'ngRoute',
  'angularMoment'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

    // $locationProvider.html5Mode({
    //   enabled : true,
    //   requireBase : false
    // });

    $routeProvider
      .when('/', {
        templateUrl : 'views/bookmark-list.html',
        controller : 'BookmarksController'
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