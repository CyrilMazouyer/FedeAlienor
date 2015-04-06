'use strict';

/**
 * @ngdoc function
 * @name alienorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alienorAngularApp
 */
angular.module('alienorAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
