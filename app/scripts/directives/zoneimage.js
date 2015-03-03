'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:zoneImage
 * @description
 * # zoneImage
 */
angular.module('gpwebApp')
  .directive('zoneImage', function () {
    return {
      template: '<div></div>',
      templateUrl: "zoneimage.html",
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('z is the zoneImage directive');
      },
      controller: function () {
        var z = new ImageZone();
        z.name = "";
        z.x = 0.0;
        z.y = 0.0;
        z.length = 0.0;
        z.width = 0.0;
        z.link = {}
        z.colorBackground = {};
        z.border = {};
        z.imageBackground = "";
        z.depth = 0;
        z.title = "";
        z.backgroundImage = "";
        z.description = "";

        z.changeImage = function (file) {
          if (typeof file !== 'undefined') {
            z.backgroundImage(file);
          }
        };

        z.changeDescription = function (description) {
          if (typeof description !== 'undefined') {
            z.description = (new String(description)).toString();
          }
        };

        z.toHTML = function () {
          var txt = "<p> <img src='" + z.backgroundImage + "'/ alt='" + z.descritpion + "'"
          if (typeof z.title !== 'undefined') {
            txt += "title='" + z.title + "'";
          }
          txt += "> </p>";
          return txt;
        };

        z.toHTML = function () {
          var txt = "<div id='" + z.name + "'";
          if (typeof z.title !== 'undefined') {
            txt += "title='" + z.title + "'";
          }
          txt += " style='width: " + z.width + "; length: " + z.length + ";";
          txt += "top: " + z.y + " px;right: " + z.x + ";";
          if (typeof z.colorBackground !== 'undefined') {
            txt += "color: " + z.colorBackground + ";";
          }
          if (typeof z.imageBackground !== 'undefined') {
            txt += "background-image: url('" + z.imageBackground + "');";
          }
          if (typeof z.border !== 'undefined') {
            txt += "border: " + z.border + ";";
          }
          txt += "'></div>";
          return txt;
        };

        z.changeDimension = function (length, width) {
          if (typeof length !== 'undefined') {
            z.length(parseFloat(length));
          }
          if (typeof width !== 'undefined') {
            z.width(parseFloat(width));
          }
        };

        z.changeTitle = function (title) {
          if (typeof title !== 'undefined') {
            z.title = (new String(title)).toString();
          }
        };

        z.move = function (dx, dy) {
          if (typeof dx !== 'undefined') {
            z.length(parseFloat(dx));
          }
          if (typeof dy !== 'undefined') {
            z.width(parseFloat(dy));
          }
        };

        z.changeImBackground = function (image) {
          if (typeof image !== 'undefined') {
            z.imageBackground = (new String(image)).toString();
          }
        };

        z.changeColorBackground = function (color) {
          if (typeof color !== 'undefined') {
            z.colorBackground = (new String(color)).toString();
          }
        };

        z.changeBorder = function (border) {
          if (typeof border !== 'undefined') {
            z.border = (new String(border)).toString();
          }
        };

        z.changeDepth = function (depth) {
          if (typeof depth !== 'undefined') {
            z.depth(parseInt(depth));
          }
        };

        z.prototype.changeFont = function (textFont) {
          if (typeof textFont !== 'undefined') {
            z.textFont(textFont);
          }
        };

        z.prototype.changeText = function (text) {
          if (typeof text !== 'undefined') {
            z.text = (new String(text)).toString();
          }
        };

        z.prototype.changeStyle = function (style) {
          if (typeof style !== 'undefined') {
            z.textStyle = (new String(style)).toString();
          }
        };

        z.prototype.changeDecoration = function (deco) {
          if (typeof deco !== 'undefined') {
            z.textDecoration = (new String(deco)).toString();
          }
        };

        z.prototype.changeAlignment = function (align) {
          if (typeof align !== 'undefined') {
            z.textAlign = (new String(align)).toString();
          }
        };

        z.prototype.changeColor = function (color) {
          if (typeof color !== 'undefined') {
            z.textColor = (new String(color)).toString();
          }
        };

        z.prototype.changeSize = function (textSize) {
          if (typeof textSize !== 'undefined') {
            z.textSize(parseFloat(textSize));
          }
        };

      },
      controllerAs: "zoneImage"
    };
  });
