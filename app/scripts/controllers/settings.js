'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('SettingsCtrl', function ($scope, $modalInstance, alertsEnabled, currentLanguage, availableLanguages) {

    $scope.alertsEnabled = alertsEnabled;

    $scope.selectedLanguage = currentLanguage;
    $scope.availableLanguages = availableLanguages;

    $scope.ok = function () {
      $modalInstance.close({
        alert: $scope.alertsEnabled,
        language: $scope.selectedLanguage
      });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
