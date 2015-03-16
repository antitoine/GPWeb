'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:page
 * @description
 * # page
 */
angular.module('gpwebApp')
  .directive('page', ['pageData', function (pageData) {
    return {
      templateUrl: 'views/page.html',
      restrict: 'E',
      controller: function () {
        this.zones = pageData.getZones();
      },
      controllerAs: 'page'
    };
  }]);
