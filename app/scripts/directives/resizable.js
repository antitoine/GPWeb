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
      link: function postLink(scope, elem, attrs) {
        if (elem.data('resizable-containment')) {
          elem.resizable({ containment: elem.data('resizable-containment') });
        } else {
          elem.resizable();
        }
      }
    };
  });
