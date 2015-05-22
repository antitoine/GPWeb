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
    var isSet = function (variable){
      if ( typeof(variable) !== 'undefined' ) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isSet = isSet;

    $scope.borderStyleOptions = ['none','solid','dotted','dashed','double','groove','ridge','inset','outset'];
    $scope.textDecorationOptions = ['none','underline','line-through','overline','blink'];
    $scope.alignOptions = ['left','center','right','justify'];

    $scope.configurable = pageData.getSelected();
    $scope.propertyEnabled = {};
    for (var key in $scope.configurable) {
      $scope.propertyEnabled[key] = $scope.configurable[key] !== 'none';
    }

    $scope.$watch(pageData.getSelected, function () {
      $scope.configurable = pageData.getSelected();
      for (var key in $scope.configurable) {
        $scope.propertyEnabled[key] = $scope.configurable[key] !== 'none';
      }
    });

    // TODO Trouver mieux, car en terme de performance c'est à chier
    $scope.$watch(function ($scope) {
      return $scope.propertyEnabled;
    }, function () {
      for (var key in $scope.configurable) {
        if (!$scope.propertyEnabled[key]) {
          $scope.configurable[key] = 'none';
        }
      }
    }, true);

  }]);
