'use strict'

angular.module('myApp')
    .controller('LinksController', ['$scope', 'LinkService',
      function($scope, LinkService){
        // $scope.new_bookmark = {};
        $scope.LinkService = LinkService;
        LinkService.getAllBookmarks();
      }

    ])