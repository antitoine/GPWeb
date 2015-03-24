'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:zone
 * @description
 * # zone
 */
angular.module('gpwebApp')
  .directive('zone', function () {
    return {
      templateUrl: 'views/zone.html',
      restrict: 'E'
    };
  });
