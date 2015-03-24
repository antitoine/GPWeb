'use strict';
/*global $ */

/**
 * @ngdoc function
 * @name gpwebApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ToolsCtrl', ['$scope', 'pageData', function ($scope, pageData) {
    angular.element(document).tooltip({
      position: {
        my: "left center",
        at: "right center"
      }
    });
    $scope.saveHandler = function () {
      console.log("Save Handler");
      //TODO
    };
    $scope.addZoneHandler = function () {
      pageData.addZone();
    };
    $scope.addZoneTextHandler = function () {
      pageData.addZone('text');
    };
    $scope.addPictureHandler = function () {
      pageData.addZone('image','/images/yeoman.png', 'Yeoman');
    };
    $scope.addLinkHandler = function () {
      console.log("Add link Handler");
      //TODO
    };
    $scope.downloadHandler = function () {
      console.log("Download Handler");
      //TODO
    };
  }]);
