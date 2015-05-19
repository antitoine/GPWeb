'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:page
 * @description
 * # page
 */
angular.module('gpwebApp')
  .directive('page', ['pageData',function (pageData) {
    return {
      templateUrl: 'views/page.html',
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.$watch(pageData.getZones, function() {
          console.log(pageData.getZones());
          scope.zones = pageData.getZones();
          scope.canevas = pageData.getCanevas();
          scope.background = pageData.getBackground();
        });
      },
      controller: function () {
        pageData.pull();
      },
      controllerAs: 'page',
      replace: true
    };
  }]);
