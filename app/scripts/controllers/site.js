'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:SiteCtrl
 * @description
 * # SiteCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('SiteCtrl', function ($scope) {
    $scope.style = {'height': $(window).height() + "px"};
  });
