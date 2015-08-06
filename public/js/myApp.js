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
      .when('/bookmarks/:id', {
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

.run(function($rootScope,$location,AuthService){
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        var whiteList   = ['/register']; //the login is the only unguarded route - everything else needs to check session auth
        var routeSafe = !$.inArray($location.path(),whiteList);//boolean - is route safe or protected
        var loggedIn = AuthService.checkLoginStatus().then(function (res){
          console.log('loggin in', res);

        $rootScope.HEADING = "Keep track of the best resources on the web!"

          if((!res.data.authenticated && !routeSafe) || !res.data.authenticated) {
            $location.path('/register');
            console.log('in here');

          }else{
            console.log('EVery time');
            sessionStorage.setItem('username', res.data.user.username);
            sessionStorage.setItem('userId', res.data.user.id);
            $rootScope.HEADING = res.data.user.username + "'s Bookmarks";
          }

        });//boolean - if user is logged in


    });
  })