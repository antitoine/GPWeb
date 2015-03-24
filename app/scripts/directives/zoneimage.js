'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:zoneImage
 * @description
 * # zoneImage
 */
angular.module('gpwebApp')
  .directive('zoneImage', function () {
    return {
      templateUrl: 'views/zoneimage.html',
      restrict: 'E'
    };
  });
