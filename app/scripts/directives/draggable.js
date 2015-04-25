'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:draggable
 * @description
 * # draggable
 */
angular.module('gpwebApp')
  .directive('draggable', function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        if (elem.data('draggable-containment')) {
          elem.draggable({ containment: elem.data('draggable-containment'), scroll: false });
        } else {
          elem.draggable();
        }
        elem.on('dragstop', function () {
          if (scope.zone.top) {
            scope.zone.top = elem.position().top + 'px';
          }
          if (scope.zone.left) {
            scope.zone.left = elem.position().left + 'px';
          }
          scope.$apply();
        });
      }
    };
  });
