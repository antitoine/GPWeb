'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('SettingsCtrl', function ($scope, $modalInstance, alertsEnabled) {

    $scope.alertsEnabled = alertsEnabled;

    $scope.ok = function () {
      $modalInstance.close($scope.alertsEnabled);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
