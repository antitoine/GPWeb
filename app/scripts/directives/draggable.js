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
      link: function postLink(scope, elem, attrs) {
        if (elem.data('draggable-containment')) {
          elem.draggable({ containment: elem.data('draggable-containment'), scroll: false });
        } else {
          elem.draggable();
        }
      }
    };
  });
