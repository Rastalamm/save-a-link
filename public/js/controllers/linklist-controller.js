'use strict'

var LinksController = angular.module('LinksController', [])

  LinksController
    .controller('LinksController', ['$scope', 'LinkService',
      function ($scope, LinkService){
        console.log(LinkService.links);
        $scope.LinkService = LinkService;
      }
    ])