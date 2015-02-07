'use strict';
var app = angular.module('chattyApp');

app.service('MessageService', function($http) {
 		   
	this.getMessages = function() {
		return $http.get('http://localhost:8999')
			var results = response.data;
			return results;
	};

	this.postMessage = function(message) {
		return $http.post('http://localhost:8999', {text: message});
	};

	

 });
