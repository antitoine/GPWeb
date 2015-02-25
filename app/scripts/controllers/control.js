'use strict';
/*global $ */

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # ControlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ControlCtrl', function ($scope) {
    $scope.isCollapsed = false;
    $scope.collapseControl = function() {
      if ($scope.isCollapsed) {
        $scope.isCollapsed = false;
      } else {
        $scope.isCollapsed = true;
      }
    };
    $scope.style = {
      'height': $(window).height() + 'px'
    };

    $scope.config = false;
  });
