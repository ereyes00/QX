var app = angular.module('QX', ['ngRoute'])
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
       .otherwise({
          redirectTo: '/'
       })
})
