angular.module('flightApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('landing', {
    url: '/landing',
    templateUrl: 'app/landing/landing.html',
    authenticate: false,
    signedin: false
  });

  $urlRouterProvider.otherwise('/landing');
})
