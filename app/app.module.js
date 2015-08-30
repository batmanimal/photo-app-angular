var app = angular.module('app', ['display', 'listCtrl', 'ngRoute'])

.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/components/display/displayView.html',
      controller: 'displayController',
      controllerAs: 'display'
    });
    $locationProvider.html5Mode(true);
});
