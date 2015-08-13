'use strict';

/**
 * @ngdoc function
 * @name angularMoviedbApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularMoviedbApp
 */
angular.module('angularMoviedbApp')
  .controller('HeaderCtrl', function ($scope, $location) {
		$scope.query = ""
        $scope.searchAction = function(){
            $location.path("/search/" + $scope.query);
        }
  });
