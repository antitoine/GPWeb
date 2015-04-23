'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # ControlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ControlCtrl', ['$scope', 'pageData', function ($scope, pageData) {
    $scope.configurable = pageData.getSelected();
    $scope.$watch(pageData.getSelected, function () {
      $scope.configurable = pageData.getSelected();
      console.log(pageData.getSelected());
    });
  }]);
