var flightApp = angular.module('flightApp', ['ui.router', '720kb.datepicker'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('landing', {
    url: '/landing',
    templateUrl: 'app/landing/landing.html',
    controller: 'landingCtrl',
    authenticate: false,
    signedin: false
  });

  $urlRouterProvider.otherwise('/landing');
})
