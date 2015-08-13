'use strict';

/**
 * @ngdoc overview
 * @name angularMoviedbApp
 * @description
 * # angularMoviedbApp
 *
 * Main module of the application.
 */
angular
  .module('angularMoviedbApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl'
      })
      .when('/popular', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
