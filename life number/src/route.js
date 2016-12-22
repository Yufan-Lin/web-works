(function () {
  'use strict';

  angular.module('DivinationApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/about');

    $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'src/templates/home.template.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'src/templates/about.template.html'
    })

    .state('home.result', {
      url: '/result',
      templateUrl: 'src/templates/nol.template.html'
    });
  }
})();
