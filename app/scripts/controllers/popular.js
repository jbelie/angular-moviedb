'use strict';

/**
 * @ngdoc function
 * @name angularMoviedbApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the angularMoviedbApp
 */
angular.module('angularMoviedbApp')
  .controller('PopularCtrl', function ($scope, movieProvider) {
	  
		$scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.loading = true;
        $scope.orderByPredicate = '';
        $scope.orderByReverse = false;

        $scope.loadMovies = function(){
            $scope.loading = true;

			setTimeout(function(){
				movieProvider.popular($scope.currentPage).success(function(data){
					$scope.movies = data.results;
					$scope.totalPages = data.total_pages;
					$scope.loading = false;
				}).error(function(response){
					alert(response.status_message);
				});
			},5000);
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };
        
		$scope.clickPredicateName = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'title';
        }

        $scope.clickPredicateRate = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'vote_average';
        }

        $scope.loadMovies();
        
  });
