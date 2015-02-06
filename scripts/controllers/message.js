'use strict';
var app = angular.module('chattyApp');

app.controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    MessageService.getMessages().then(function(response) {
    	$scope.messages = response.data;
    });

    $scope.addMessage = function(chatMsg) {
    	MessageService.
    };
  

});
