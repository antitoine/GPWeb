'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:resizable
 * @description
 * # resizable
 */
angular.module('gpwebApp')
  .directive('resizable', function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        if (elem.data('resizable-containment')) {
          elem.resizable({ containment: elem.data('resizable-containment') });
        } else {
          elem.resizable();
        }
        elem.on('resizestop', function () {
          if (scope.zone.width) {
            scope.zone.width = elem.width() + 'px';
          }
          if (scope.zone.height) {
            scope.zone.height = elem.height() + 'px';
          }
          scope.$apply();
        });
      }
    };
  });
