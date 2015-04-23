'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:zoneText
 * @description
 * # zoneText
 */
angular.module('gpwebApp')
  .directive('zoneText', function () {
    return {
      templateUrl: 'views/zonetext.html',
      restrict: 'E',
      replace: true
    };
  });
