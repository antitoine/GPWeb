'use strict';
/*global $ */

/**
 * @ngdoc function
 * @name gpwebApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ToolsCtrl', function ($scope) {
    $scope.style = {'height': $(window).height() + 'px'};
  });
