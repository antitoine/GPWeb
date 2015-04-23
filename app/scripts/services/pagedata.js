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
    var background = {
      name: 'Background',
      backgroundColor: 'none',
      backgroundImage: '../images/canevas.png',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto'
    };
    var canevas = {
      width: '600px',
      height: '800px',
      name: 'Canevas',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      backgroundImage: 'none',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      backgroundSize: 'auto'
    };
    var zones = {
      text: [
        {
          id: '0',
          name: 'zoneTest',
          width: '200px',
          height: '50px',
          top: '100px',
          left: '100px',
          depth: '5',
          backgroundColor: '##23E510',
          backgroundImage: 'none',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#cccccc',
          font: 'auto',
          color: '#dedede',
          size: '20pt',
          style: 'normal',
          weight: 'normal',
          decoration: 'none',
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
          depth: '6',
          backgroundColor: '#CAC412',
          backgroundImage: 'none',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#cccccc',
          font: 'auto',
          color: '#dedede',
          size: '20pt',
          style: 'normal',
          weight: 'normal',
          decoration: 'none',
          align: 'center',
          text: 'O'
        }
      ],
      image: [
        {
          id: '2',
          name: 'zoneImageTest',
          width: '200px',
          height: '50px',
          top: '100px',
          left: '100px',
          depth:'7',
          backgroundColor: '#C82FA7',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#cccccc',
          imageFile: 'images/yeoman.png',
          description: 'Yeoman'
        }
      ],
      zone: [
        {
          id: '3',
          name: 'zoneTest3',
          width: '200px',
          height: '50px',
          top: '100px',
          left: '100px',
          depth: '9',
          backgroundColor: '#C82FA7',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#cccccc',
          backgroundImage: 'images/yeoman.png',
          backgroundRepeat: 'no-repeat',
          description: 'Yeoman'
        }
      ]
    };

    var selected = null;

    // Public API here
    return {
      getBackground: function () {
        return background;
      },
      getCanevas: function () {
        return canevas;
      },
      getZones: function (type) {
        if (type === 'text') {
          return zones.text;
        } else if (type === 'image') {
          return zones.image;
        } else {
          return zones;
        }
      },
      addZone: function (type, img, desc) {
        var zone = {
          id: (new Date()).getTime(),
          name: 'New zone',
          width: '100px',
          height: '100px',
          top: '100px',
          left: '100px',
          depth: '0',
          backgroundColor: '#ffffff',
          backgroundImage: 'none',
          backgroundRepeat: 'repeat',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'black'
        };
        if (type === 'text') {
          zone.font = 'auto';
          zone.color = '#000000';
          zone.size = '1em';
          zone.style = 'normal';
          zone.weight = 'normal';
          zone.decoration = 'none';
          zone.align = 'left';
          zone.text = 'Text';
          zones.text.push(zone);
        } else if (type === 'image') {
          zone.imageFile = img;
          zone.description = desc;
          zones.image.push(zone);
        } else {
          zones.zone.push(zone);
        }
      },
      changeImage: function (file, zone) {
        if (typeof file !== 'undefined' && zone.type === 'image') {
          zone.imageFile(file);
        }
      },
      getSelected: function () {
        if (selected === null) {
          selected = canevas;
        }
        return selected;
      },
      setSelected: function (element) {
        selected = element;
      }
    };
  })
;
