'use strict'

angular.module('myApp', [])
  .controller('LinksController', ['$scope',
    function ($scope){
      $scope.Links = Links;
    }
    ])