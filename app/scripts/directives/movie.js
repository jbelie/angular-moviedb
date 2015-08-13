'use strict';

/**
 * @ngdoc directive
 * @name angularMoviedbApp.directive:movie
 * @description
 * # movie
 */
angular.module('angularMoviedbApp')
  .directive('movie', function () {
    return {
      templateUrl: 'views/decorators/movie.html',
      replace: true,
      restrict: 'E'
    };
  });
