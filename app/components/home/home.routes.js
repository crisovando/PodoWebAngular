(function() {
  'use strict';
 
  angular
    .module('podologiaApp.home')
    .config(configuration);
 
  /* @ngInject */
  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
      });
 
    $urlRouterProvider.otherwise('/home');
  }
})();