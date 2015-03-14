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
  .controller('ToolsCtrl', function ($scope) {
    $scope.style = {'height': $(window).height() + 'px'};
    angular.element(document).tooltip({
      position: {
        my: "left center",
        at: "right center"
      }
    });
    $scope.saveHandler = function() {
      console.log("Save Handler");
      //TODO
    };
    $scope.addZoneHandler = function() {
      console.log("Add zone Handler");
      //TODO
    };
    $scope.addZoneTextHandler = function() {
      console.log("Add zone text Handler");
      //TODO
    };
    $scope.addPictureHandler = function() {
      console.log("Add picture Handler");
      //TODO
    };
    $scope.addLinkHandler = function() {
      console.log("Add link Handler");
      //TODO
    };
    $scope.downloadHandler = function() {
      console.log("Download Handler");
      //TODO
    };
  });
