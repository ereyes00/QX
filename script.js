var app = angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
     $routeProvider
       .when('/home', {
          templateUrl: 'components/home/home.html',
          controller: 'homeController'
       })
       .when('/pageTwo', {
          templateUrl: 'components/pageTwo/pageTwo.html',
          controller: 'pageTwoController'
       })
       .when('/pageThree', {
          templateUrl: 'components/pageThree/pageThree.html',
          controller: 'pageThreeController'
       })
       .when('/login-page', {
          templateUrl: 'components/login-page/login.html',
          controller: 'login-pageController'
       })
       .otherwise({
          redirectTo: '/'
       })
})
