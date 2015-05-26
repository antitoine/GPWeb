'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # ControlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ControlCtrl', ['$scope', '$http', 'pageData', '$modal', function ($scope, $http, pageData, $modal) {
    var isSet = function (variable){
      if ( typeof(variable) !== 'undefined' ) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isSet = isSet;

    $scope.selectPageLink = function () {
      var popupSelectPage = $modal.open({
        templateUrl: 'views/popuplink.html',
        controller: function ($scope, $modalInstance, pagesList) {
          $scope.pagesList = pagesList;
          $scope.ok = function () {
            $modalInstance.close({
              pageSelected: $scope.pageSelected
            });
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        controllerAs: 'popuplinkCtrl',
        resolve: {
          pagesList: function() {
            return pageData.listPages();
          }
        }
      });
      popupSelectPage.result.then(function (result) {
        $scope.configurable.link = result.pageSelected.name+'.html';
      });
    };

    $scope.pull = pageData.pull;
    $scope.$watch(pageData.listPages, function() {
      $scope.pages = pageData.listPages();
    });

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

    $scope.removeZoneHandler = pageData.removeSelected;

  }]);
