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
        };

    // Public API here
    return {
      getZones: function (type) {
        if(type === 'text')
          return zones.text;
        else
          return zones;
      },
      addZone: function(type) {
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
      }
    };
  });
