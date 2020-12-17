"use strict";

var cs142App = angular.module('cs142App', ['ngRoute']);

cs142App.controller('MainController', ['$scope', function($scope) {
   
   $scope.main = {};
   $scope.main.title = 'CS142 Project #4';

   $scope.viewName = 'example';
   $scope.example = false;
   $scope.states = true;

   $scope.switchView = function(viewName) {
   	if ($scope.example) {
   		$scope.viewName = 'example';
   		$scope.example = false;
   		$scope.states = true;
   	} else {
   		$scope.viewName = 'states';
   		$scope.example = true;
   		$scope.states = false;
   	}
   };
}]);

cs142App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/example', {
        templateUrl: 'components/example/exampleTemplate.html',
        controller: 'ExampleController'
      }).
      when('/states', {
        templateUrl: 'components/states/statesTemplate.html',
        controller: 'StatesController'
      }).
      otherwise({
        redirectTo: '/example'
      });
  }]);