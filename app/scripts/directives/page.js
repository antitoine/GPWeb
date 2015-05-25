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
      scope: { name: '=?' },
      link: function(scope) {
        scope.$watch(pageData.getZones, function() {
          scope.zones = pageData.getZones();
          scope.canvas = pageData.getCanvas();
          scope.background = pageData.getBackground();
        });
      },
      controller: function ($scope) {
        if($scope.name === undefined) {
          $scope.name = 'index';
        }
        pageData.pull($scope.name);
        $scope.setSelected = pageData.setSelected;
      },
      controllerAs: 'page',
      replace: true
    };
  }]);
