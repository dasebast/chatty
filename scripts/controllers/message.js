'use strict';
var app = angular.module('chattyApp');

app.controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];


    $scope.addMessage = function() {
        MessageService.postMessage($scope.chatMsg).then(function(data) {
            $scope.messages = data.data;
            $scope.chatMsg = '';
        });
    };

    MessageService.getMessages().then(function(response) {
    	$scope.messages = response;
    });
    


});
