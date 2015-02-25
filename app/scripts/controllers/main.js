'use strict';
/*global $ */

/**
 * @ngdoc function
 * @name gpwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.style = {'height': $(window).height() + 'px'};
  });
