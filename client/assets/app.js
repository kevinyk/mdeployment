
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/home',{
      templateUrl: 'home.html',
      controller: 'homeController',
      controllerAs: "meep"
  })
  .when('/',{
      templateUrl: 'assets/partials/login.html',
      controller: 'userController'
  })
  .when('/addmessage',{
      templateUrl: 'home.html',
      controller: 'messageController',
      controllerAs: "meep"
  })
    .otherwise({
      redirectTo: '/'
    });
});
