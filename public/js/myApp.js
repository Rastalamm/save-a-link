'use strict'

angular.module('myApp', [
  'ngRoute',
  'LinksController'
  ])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider){

    $locationProvider.html5Mode({
      enabled : true,
      requireBase : false
    });

    $routeProvider
      .when('/', {
        templateUrl : 'views/linklist.html',
        conroller : 'LinksController'
      })
      .when('/individual', {
        templateUrl : 'views/individual.html'
      })
      .otherwise({
        templateUrl : 'views/404.html'
      })
  }])
  .run(function(){

  })