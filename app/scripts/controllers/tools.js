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
  });
