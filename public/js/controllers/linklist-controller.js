'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService',
      function ($scope, LinkService){

        $scope.LinkService = LinkService;
        LinkService.getAllBookmarks();
      }

    ])