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

    .state('analysis.result', {
      url: '/analysis.result',
      templateUrl: 'src/templates/nol.template.html'
    })

    .state('analysis', {
      url: '/analysis',
      templateUrl: 'src/templates/analysis.template.html'
    })

    .state('analysis.spn', {
      url: '/analysis/spiritNum',
      templateUrl: 'src/templates/analysis.spirit-number-detail.template.html'
    })

    .state('analysis.inAcNum', {
      url: '/analysis/inAcNumDetail',
      templateUrl: 'src/templates/analysis.innate-acquired-number.template.html'
    });
  }
})();
