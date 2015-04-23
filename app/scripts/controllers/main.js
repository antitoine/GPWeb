'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('MainCtrl', ['$scope', '$timeout', 'pageData', '$modal', function ($scope, $timeout, pageData, $modal) {
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

    $scope.$watch(pageData.getSelected, function () {
      var alert = { type: 'success', msg: pageData.getSelected().name + ' seleted.' };
      $scope.addAlert(alert);
      $timeout(function(){$scope.alerts.splice($scope.alerts.indexOf(alert), 1);}, 4000);
    });

    $scope.openSettings = function () {
      var settingsWindow = $modal.open({
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        resolve: {
          alertsEnabled: function() {
            return $scope.alertsEnabled;
          }
        }
      });
      settingsWindow.result.then(function (alertsEnabled) {
        $scope.alertsEnabled = alertsEnabled;
      });
    };
  }]);
