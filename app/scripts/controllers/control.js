'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # ControlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
  .controller('ControlCtrl', ['$scope', 'pageData', function ($scope, pageData) {
    // $scope.config = true; //'views/config.html';
    $scope.config = {
      value: true
    };
    /* if(selectedItem.type === 'text')
     {
     $scope.config = {
     value: true,
     content:"Essai"
     };

     } else if (selectedItem.type === 'image'){
     $scope.config = {
     value: true,
     content:"Essai"
     };

     } else {
     $scope.config = {
     value: true,
     content:"Essai"
     };
     }*/

    // $scope.config.content = { "<h4> Essai </h4>"};
    $scope.addWidthHandler = function () {
      console.log("Width Handler");
      //TODO
      var widthLabel = document.getElementById('widthInput');
      var width = widthLabel.innerHTML;
      pageData.changeDimension(undefined, width);
    };

    $scope.addHeightHandler = function () {
      console.log("Height Handler");
      //TODO
      var heigthLabel = document.getElementById('heigthInput');
      var height = heightLabel.innerHTML;
      pageData.changeDimension(height);
    };
    $scope.addLeftHandler = function () {
      console.log("Left Handler");
      //TODO
      var leftLabel = document.getElementById('leftInput');
      var left = leftLabel.innerHTML;
      pageData.move(left);
    };

    $scope.addTopHandler = function () {
      console.log("Top Handler");
      //TODO
      var topLabel = document.getElementById('topInput');
      var top = topLabel.innerHTML;
      pageData.move(undefined, top);
    };

    $scope.addBorderWidthHandler = function () {
      console.log("Border Width Handler");
      //TODO
      pageData.changeBorder();
    };

    $scope.addBordureHandler = function () {
      console.log("Bordure Handler");
      //TODO
      pageData.changeBorder();
    };

    $scope.addTextHandler = function () {
      console.log("Text Handler");
      //TODO
      var textLabel = document.getElementById('textInput');
      var text = textLabel.innerHTML;
      pageData.changeText(text);
    };

    $scope.addTextSizeHandler = function () {
      console.log("Text Size Handler");
      //TODO
      pageData.changeSize();
    };

    $scope.addTextStyleHandler = function () {
      console.log("Text Style Handler");
      //TODO
      pageData.changeStyle();
    };

    $scope.addTextDecorationHandler = function () {
      console.log("Text Decoration Handler");
      //TODO
      pageData.changeDecoration();
    };

    $scope.addTextAlignHandler = function () {
      console.log("Align Handler");
      //TODO
      pageData.changeAlignment();
    };

    $scope.addDescriptionHandler = function () {
      console.log("Descritpion Handler");
      //TODO récupérer les paramètres...
      var descriptionLabel = document.getElementById('descriptionInput');
      var description = descriptionLabel.innerHTML;
      pageData.changeDescription(description);
    };

  }]);
