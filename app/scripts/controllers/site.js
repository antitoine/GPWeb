'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:SiteCtrl
 * @description
 * # SiteCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp').controller('SiteCtrl', function ($scope) {
  $scope.wheight = {
    'height': $(window).height() + "px"
  };
});
