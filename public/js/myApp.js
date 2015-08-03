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
        templateUrl : 'index.html'
      })
      .when('/all', {
        templateUrl : 'views/linklist.html',
        controller : 'LinksController'
      })
      .otherwise({
        templateUrl : 'views/404.html'
      })
  }])
  .run(function(){

  })