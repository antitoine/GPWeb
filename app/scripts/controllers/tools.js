'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ToolsCtrl', ['$scope', 'pageData', function ($scope, pageData) {
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
    $scope.addPageHandler = function () {
      // TODO : plus jolie façon de choisir un nom
      var title = prompt('Title ?');
      var name = title.replace(/\W+/g,'').toLowerCase();
      pageData.addPage(name,title);
    };
  }]);
