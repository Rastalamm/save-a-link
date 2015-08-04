'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService',
      function($scope, LinkService){
        console.log(LinkService.bookmarks);
        $scope.LinkService = LinkService;
      }
    ])