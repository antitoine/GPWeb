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
      templateUrl: "zoneimage.html",
      restrict: 'E'
    };
  });
