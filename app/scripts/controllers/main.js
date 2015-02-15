'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
