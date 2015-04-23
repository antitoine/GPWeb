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
    $scope.isSet = function (variable){
      if ( typeof(variable) !== "undefined" ) {
        return true;
      } else {
        return false;
      }
    };
    $scope.$watch(pageData.getSelected, function () {
      $scope.configurable = pageData.getSelected();
    });

    $scope.borderStyleOptions = ['none','solid','dotted','dashed','double','groove','ridge','inset','outset'];
    $scope.textDecorationOptions = ['none','underline','line-through','overline','blink'];
    $scope.alignOptions = ['left','center','right','justify'];
  }]);
