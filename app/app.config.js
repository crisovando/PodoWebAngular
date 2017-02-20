(function(){
  'use strict';

  angular
      .module('podologiaApp')
      .config(configure)

  configure.$inject = ['$routeProvider', '$locationProvider', "$httpProvider"];

  function configure($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/search', {
      templateUrl: 'pages/search.html',
      resolve: {}
    });

    $routeProvider.when('/', {
      templateUrl: '/pages/home.html',
      resolve: {}
    });

    $routeProvider.when('/about', {
      templateUrl: '/pages/about.html'
    });

    $routeProvider.when('/about', {
      templateUrl: '/pages/pacientes.html'
    });


    $routeProvider.when('/404', {
      templateUrl: '/pages/404.html'
    });


    $routeProvider.otherwise({redirectTo: '/'});

    }

}());
