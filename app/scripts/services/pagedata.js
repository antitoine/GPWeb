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
      backgroundColor: '',
      backgroundImage: '../images/canevas.png',
      backgroundRepeat: 'repeat',
      backgroundPosition: '',
      backgroundSize: ''
    };
    var canevas = {
      width: '600px',
      height: '800px',
      name: 'Canevas',
      backgroundColor: 'white',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'black',
      backgroundImage: '',
      backgroundRepeat: ''
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
          backgroundColor: 'green',
          backgroundImage: 'auto',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'red',
          font: 'auto',
          color: 'blue',
          size: '20pt',
          style: 'auto',
          weight: 'auto',
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
          depth: '6',
          backgroundColor: 'yellow',
          backgroundImage: 'auto',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'red',
          font: 'auto',
          color: 'blue',
          size: '20pt',
          style: 'auto',
          weight: 'auto',
          decoration: 'auto',
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
          backgroundColor: 'purple',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'red',
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
          backgroundColor: 'purple',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'red',
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
          id: '',
          name: '',
          width: '100px',
          height: '100px',
          top: '100px',
          left: '100px',
          depth: 'auto',
          backgroundColor: 'auto',
          backgroundImage: 'auto',
          backgroundRepeat: 'auto',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'black'
        };
        if (type === 'text') {
          zone.font = 'auto';
          zone.color = 'auto';
          zone.size = 'auto';
          zone.style = 'auto';
          zone.weight = 'auto';
          zone.decoration = 'auto';
          zone.align = 'auto';
          zone.text = '';
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
