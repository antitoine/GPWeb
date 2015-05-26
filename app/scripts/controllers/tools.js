'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ToolsCtrl', ['$scope', '$window', 'pageData', '$modal', 'gettextCatalog', function ($scope, $window, pageData, $modal, gettextCatalog) {
    $scope.saveHandler = function () {
      pageData.push();
    };
    $scope.addZoneHandler = function () {
      pageData.addZone();
    };
    $scope.addZoneTextHandler = function () {
      pageData.addZone('text');
    };
    $scope.addPictureHandler = function () {
      pageData.addZone('image','none', '');
    };
    $scope.downloadHandler = function () {
      pageData.push(function() {
        $window.location.href = '/service/download';
      });
    };
    $scope.addPageHandler = function () {
      var popupNewPage = $modal.open({
        templateUrl: 'views/popupnewpage.html',
        controller: function ($scope, $modalInstance) {
          $scope.ok = function () {
            $modalInstance.close({
              newPageName: $scope.newPageName
            });
          };
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        controllerAs: 'popupnewpageCtrl'
      });
      popupNewPage.result.then(function (result) {
        var title = result.newPageName;
        var name = title.replace(/\W+/g,'').toLowerCase();
        pageData.addPage(name,title);
      });
    };
    $scope.removePageHandler = function () {
      if(!pageData.isIndex()) {
        var popupConf = $modal.open({
          templateUrl: 'views/popupconf.html',
          controller: function ($scope, $modalInstance) {
            $scope.ok = function () {
              $modalInstance.close({
                confirmation: true
              });
            };
            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            };
          },
          controllerAs: 'PopupConfCtrl'
        });
        popupConf.result.then(function (result) {
          if (result.confirmation) {
            //console.log("Remove page Handler");
            //TODO Faire le taf ici
            pageData.removePage();
            pageData.pull();
          }
        });
      } else {
        // TODO : un beau modal !
        alert(gettextCatalog.getString('You can\'t remove index page !'));
      }
    };
  }]);
