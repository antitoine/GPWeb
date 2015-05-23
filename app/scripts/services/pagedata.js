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
    var pages = null;
    var currentPageName = null;
    var data = {
      background: {
        name: 'Background',
        backgroundColor: 'none',
        backgroundImage: 'none',
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
        backgroundImage: 'none',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto'
      },
      zones: {
        text: [],
        image: [],
        zone: []
      }
    };

    var selected = null;

    // Public API here
    return {
      pull: function(name) {
        //console.log(name);
        $http.get('/service/pull?page='+name).
          success(function(d) {
            data = JSON.parse(d);
            selected = data.canevas;
            currentPageName = name;
          }).
          error(function(d) {
            console.log('PULL ERROR : '+d);
          });
      },
      push: function() {
        if(currentPageName !== null) {
          var json = JSON.stringify(data);
          $http({
            url: '/service/push?page='+currentPageName,
            method: 'POST',
            data: json,
            headers: {'Content-Type': 'application/json'}
            }).
            success(function(d) {
              //console.log('PUSH '+d);
            }).
            error(function(d) {
              console.log('PUSH ERROR : '+d);
            });
        }
      },
      listPages: function () {
        if(pages === null) {
          pages = {};
          $http.get('/service/list').
            success(function(d) {
              pages = JSON.parse(d);
            }).
            error(function(d) {
              console.log('LIST ERROR : '+d);
            });
        }
        return pages;
      },
      addPage: function(name, title) {
        var page = {name: name, title: title};
        var json = JSON.stringify(page);
        $http({
          url: '/service/add',
          method: 'POST',
          data: json,
          headers: {'Content-Type': 'application/json'}
          }).
          success(function(d) {
            pages.push(page);
          }).
          error(function(d) {
            console.log('ADD ERROR : '+d);
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
