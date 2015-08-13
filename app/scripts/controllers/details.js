'use strict';

/**
 * @ngdoc function
 * @name angularMoviedbApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the angularMoviedbApp
 */
angular.module('angularMoviedbApp')
  .controller('DetailsCtrl', function ($scope, $routeParams, movieProvider) {
        var id = $routeParams.id;
        $scope.loading = true;
        
		movieProvider.details(id).success(function(data){
			$scope.loading = false;
			$scope.movie = data;
		}).error(function(response){
			alert(response.status_message);
		});

		
		$scope.back = function(){
			history.back();
		}

 });
