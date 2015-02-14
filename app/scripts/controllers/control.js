'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # controlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp').controller('ControlCtrl', function ($scope) {
  var show = false;
  $scope.on = function(){
    show = true;
  }
  $scope.off = function(){
    show = false;
  }
  $scope.showControl = function(){
    return show;
  }

});

