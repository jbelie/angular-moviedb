'use strict';

/**
 * @ngdoc directive
 * @name angularMoviedbApp.directive:loading
 * @description
 * # loading
 */
angular.module('angularMoviedbApp')
  .directive('loading', function () {
    return {
      template: '<div><div ng-show="loading" class="loading-container"></div><div ng-hide="loading" ng-transclude></div></div>',
      restrict: 'A',
      transclude: true,
      replace: false,
      scope:{
          loading: "=loading"
      },
      compile: function compile(element, attrs, transclude){
        var spinner = new Spinner().spin();
        var loadingContainer = element.find(".loading-container")[0];
        loadingContainer.appendChild(spinner.el);
        }
    };
  });
