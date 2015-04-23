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
      restrict: 'E',
      controller: function() {
        jQuery(document).ready(function() {
          jQuery('.zone').draggable({ containment: "#canevas", scroll: false });
          jQuery('.zone').resizable({ containment: "#canevas" });
        });
      }
    };
  });
