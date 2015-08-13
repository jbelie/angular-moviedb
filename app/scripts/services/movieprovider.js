'use strict';

/**
 * @ngdoc service
 * @name angularMoviedbApp.movieProvider
 * @description
 * # movieProvider
 * Service in the angularMoviedbApp.
 */
angular.module('angularMoviedbApp')
  .service('movieProvider', function ($http) {
		return{
			details: function(idMovie){
				return $http.get(url_api + "movie/" + idMovie + "?api_key=" + api_key );
			},
			search: function(query, page){
				return $http.get(url_api + "search/movie?query=" + query + "&page=" + page + "&api_key=" + api_key );
			},
			popular: function(page){
				return $http.get(url_api + "discover/movie?sort_by=popularity.desc&page=" + page + "&api_key=" + api_key );
			}
		}
 });
