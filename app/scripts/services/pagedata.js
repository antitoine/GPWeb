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
      text: [
        {
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
          backgroundColor: 'purple',
          border: '2px solid red',
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
          backgroundColor: 'purple',
          border: '2px solid red',
          backgroundImage: 'images/yeoman.png',
          backgroundRepeat: 'no-repeat',
          description: 'Yeoman'
        }
      ]
    };

    var selected = zones.text[1];

    // Public API here
    return {
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
          backgroundColor: 'auto',
          backgroundImage: 'auto',
          backgroundRepeat: 'auto',
          border: '1px solid black'
        };
        if (type === 'text') {
          zone.font = 'auto';
          zone.color = 'auto';
          zone.size = 'auto';
          zone.style = 'auto';
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
        return selected;
      }
    };
  })
;
