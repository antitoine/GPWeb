'use strict';

/**
 * @ngdoc service
 * @name gpwebApp.pageData
 * @description
 * # pageData
 * Factory in the gpwebApp.
 */
angular.module('gpwebApp')
  .factory('pageData', function () {
    // Service logic
    // ...
    var zones = {
          text: [{
            id: '0',
            name: 'zoneTest',
            width: '200px',
            height: '50px',
            top: '100px',
            left: '100px',
            backgroundColor: 'green',
            backgroundImage: 'auto',
            border: '2px solid red',
            font: 'auto',
            color: 'blue',
            size: '20pt',
            style: 'auto',
            decoration: 'auto',
            align: 'center',
            text: 'Hello world !'
          },
          {
            id: '1',
            name: 'zoneTest2',
            width: '100px',
            height: '50px',
            top: '200px',
            left: '500px',
            backgroundColor: 'yellow',
            backgroundImage: 'auto',
            border: '2px solid purple',
            font: 'auto',
            color: 'blue',
            size: '20pt',
            style: 'auto',
            decoration: 'auto',
            align: 'center',
            text: 'O'
          }]
          image: [{
            id: '2',
            name: 'zoneImageTest',
            width: '200px',
            height: '50px',
            top: '100px',
            left: '100px',
            backgroundColor: 'green',
            border: '2px solid red',
            image: '/images/yeoman.png',
            description: 'Yeoman'
          }]
          zone: [{
			id: '3',
            name: 'zoneTest3',
            width: '200px',
            height: '50px',
            top: '100px',
            left: '100px',
            backgroundColor: 'green',
            border: '2px solid red',          
            backgroundImage: '/images/yeoman.png',
            description: 'Yeoman'
		   }]
        };

    // Public API here
    return {
      getZones: function (type) {
        if(type === 'text')
          return zones.text;
        else if(type === 'image')
			return zones.image;
         return zones;
      },
      addZone: function(type, img, desc) {
        var zone = {
            id: '',
            name: '',
            width: '100px',
            height: '100px',
            top: '100px',
            left: '100px',
            backgroundColor: 'auto',
            backgroundImage: 'auto',
            border: '1px solid black',
          };
        if(type === 'text') {
          zone.font = 'auto';
          zone.color = 'auto';
          zone.size = 'auto';
          zone.style = 'auto';
          zone.decoration = 'auto';
          zone.align = 'auto';
          zone.text = '';
          zones.text.push(zone);
        }
        if(type === 'image') {
			zone.image = img;
			zone.description = desc;
			zones.image.push(zone);
		}
      }
      changeImage: function (file, zone) {
          if (typeof file !== 'undefined' && zone.type === 'image') {
            zone.image(file);
          }
      }
      changeDescription: function (description, zone) {
          if (typeof description !== 'undefined' && zone.type === 'image') {
            zone.description = (new String(description)).toString();
          }
      }
      changeDimension: function (length, width, zone) {
          if (typeof length !== 'undefined') {
            zone.length(parseFloat(length));
          }
          if (typeof width !== 'undefined') {
            zone.width(parseFloat(width));
          }
      }
      changeTitle: function (title, zone) {
          if (typeof title !== 'undefined') {
            zone.title = (new String(title)).toString();
          }
      }
      move: function (dx, dy, zone) {
          if (typeof dx !== 'undefined') {
            zone.length(parseFloat(dx));
          }
          if (typeof dy !== 'undefined') {
            zone.width(parseFloat(dy));
          }
       }
       changeImBackground: function (image, zone) {
          if (typeof image !== 'undefined') {
            zone.imageBackground = (new String(image)).toString();
          }
       }
      changeColorBackground: function (color, zone) {
          if (typeof color !== 'undefined') {
            zone.colorBackground = (new String(color)).toString();
          }
      }
      changeBorder: function (border, zone) {
          if (typeof border !== 'undefined') {
            z.border = (new String(border)).toString();
          }
      }
      changeDepth: function (depth, zone) {
          if (typeof depth !== 'undefined') {
            zone.depth(parseInt(depth));
          }
        };

       changeFont = function (textFont, zone) {
          if (typeof textFont !== 'undefined' && zone.type === 'text') {
            zone.textFont(textFont);
          }
        };

        changeText: function (text, zone) {
          if (typeof text !== 'undefined' && zone.type === 'text') {
            zone.text = (new String(text)).toString();
          }
        };

        changeStyle: function (style, zone) {
          if (typeof style !== 'undefined' && zone.type === 'text') {
            zone.textStyle = (new String(style)).toString();
          }
        };

        changeDecoration: function (deco, zone) {
          if (typeof deco !== 'undefined') {
            zone.textDecoration = (new String(deco)).toString();
          }
        };

        changeAlignment: function (align, zone) {
          if (typeof align !== 'undefined' && zone.type === 'text') {
            zone.textAlign = (new String(align)).toString();
          }
        };

        changeColor = function (color, zone) {
          if (typeof color !== 'undefined' && zone.type === 'text') {
            zone.color = (new String(color)).toString();
          }
        };

       changeSize = function (textSize, zone) {
          if (typeof textSize !== 'undefined' && zone.type === 'text') {
            zone.size(parseFloat(textSize));
          }
        };
      
      
      
      
      
      
    };
  });
