'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'pageData', '$modal', 'gettextCatalog', function ($scope, $timeout, pageData, $modal, gettextCatalog) {
    $scope.alerts = [];
    $scope.alertsEnabled = true;
    $scope.addAlert = function(alert) {
      if ($scope.alertsEnabled) {
        $scope.alerts.push(alert);
      }
    };
    $scope.closeAlert = function() {
      $scope.alerts.splice($scope.alerts.indexOf(this), 1);
    };
    $scope.addAutoCloseAlert = function(alert, time) {
      $scope.addAlert(alert);
      $timeout(function(){$scope.alerts.splice($scope.alerts.indexOf(alert), 1);}, time);
    };
    $scope.$watch(pageData.getSelected, function () {
      $scope.addAutoCloseAlert({ type: 'success', msg: (pageData.getSelected()?pageData.getSelected().name:'Nothing') + ' selected.' }, 4000);
    });

    $scope.openSettings = function () {
      var settingsWindow = $modal.open({
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        resolve: {
          alertsEnabled: function() {
            return $scope.alertsEnabled;
          },
          currentLanguage: function() {
            return gettextCatalog.getCurrentLanguage();
          },
          availableLanguages: function () {
            var languagesList = Object.keys(gettextCatalog.strings);
            languagesList.push(gettextCatalog.baseLanguage);
            return languagesList;
          }
        }
      });
      settingsWindow.result.then(function (result) {
        $scope.alertsEnabled = result.alert;
        gettextCatalog.setCurrentLanguage(result.language);
        $scope.addAutoCloseAlert({ type: 'success', msg: 'Settings changed successfully.' }, 4000);
      });
    };
  }]);
