'use strict';

/**
 * @ngdoc service
 * @name gpwebApp.pageData
 * @description
 * # pageData
 * Factory in the gpwebApp.
 */
angular.module('gpwebApp')
  .factory('pageData', ['$http', function ($http) {
    var data = {
      background: {
        name: 'Background',
        backgroundColor: 'none',
        backgroundImage: '../images/canevas.png',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto'
      },
      canevas: {
        width: '600px',
        height: '800px',
        name: 'Canevas',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        backgroundImage: '../images/canevas.png',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto'
      },
      zones: {
        text: [/*
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
            left: '400px',
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
          }*/
        ],
        image: [/*
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
          }*/
        ],
        zone: [/*
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
          }*/
        ]
      }
    };

    var selected = null;

    // Public API here
    return {
      pull: function() {
        $http.get('/service/pull').
          success(function(d) {
            data = JSON.parse(d);
          }).
          error(function(d) {
            console.log('PULL ERROR : '+d);
          });
      },
      getBackground: function () {
        return data.canevas;
      },
      getCanevas: function () {
        return data.canevas;
      },
      getZones: function (type) {
        if (type === 'text') {
          return data.zones.text;
        } else if (type === 'image') {
          return data.zones.image;
        } else {
          return data.zones;
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
          data.zones.text.push(zone);
        } else if (type === 'image') {
          zone.imageFile = img;
          zone.description = desc;
          data.zones.image.push(zone);
        } else {
          data.zones.zone.push(zone);
        }
      },
      changeImage: function (file, zone) {
        if (typeof file !== 'undefined' && zone.type === 'image') {
          zone.imageFile(file);
        }
      },
      getSelected: function () {
        if (selected === null) {
          selected = data.canevas;
        }
        return selected;
      },
      setSelected: function (element) {
        selected = element;
      }
    };
  }])
;
