angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('startseite', {
    url: '/page1',
    templateUrl: 'templates/startseite.html',
    controller: 'startseiteCtrl'
  })

  .state('cobas4000', {
    url: '/page2',
    templateUrl: 'templates/cobas4000.html',
    controller: 'cobas4000Ctrl'
  })

  .state('cobas6000', {
    url: '/page3',
    templateUrl: 'templates/cobas6000.html',
    controller: 'cobas6000Ctrl'
  })

  .state('cobas8000', {
    url: '/page4',
    templateUrl: 'templates/cobas8000.html',
    controller: 'cobas8000Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});