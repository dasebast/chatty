'use strict';
var app = angular.module('chattyApp');

app.service('MessageService', function($http) {
 		   
	this.getMessages = function() {
		return $http.get('http://localhost:8999').then(function(response) {
				var results = response.data;
				return results;
		});
	};

 });
