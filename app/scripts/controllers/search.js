'use strict';

/**
 * @ngdoc function
 * @name angularMoviedbApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the angularMoviedbApp
 */
angular.module('angularMoviedbApp')
  .controller('SearchCtrl', function ($scope, $routeParams, movieProvider) {
		
		$scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.loading = true;
        $scope.orderByPredicate = '';
        $scope.orderByReverse = false;

        $scope.loadMovies = function(){
			$scope.loading = true;
			
            movieProvider.search($scope.query, $scope.currentPage).success(function(data){
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
                $scope.loading = false;
            }).error(function(response){
				alert(response.status_message);
			});
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
