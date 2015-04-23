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
      controller: function() {
        jQuery(document).ready(function() {
          jQuery('.zone').draggable({ containment: "#canevas", scroll: false });
          jQuery('.zone').resizable({ containment: "#canevas" });
        });
      }
    };
  });
