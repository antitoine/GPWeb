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
      canvas: {
        width: '600px',
        height: '800px',
        name: 'Canvas',
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
        if(name === undefined)
          name = 'index';
        $http.get('/service/pull?page='+name).
          success(function(d) {
            data = JSON.parse(d);
            selected = data.canvas;
            currentPageName = name;
          }).
          error(function(d) {
            console.log('PULL ERROR : '+d);
          });
      },
      push: function(fctSuccess) {
        if(currentPageName !== null) {
          var json = JSON.stringify(data);
          $http({
            url: '/service/push?page='+currentPageName,
            method: 'POST',
            data: json,
            headers: {'Content-Type': 'application/json'}
            }).
            success(function() {
              if (fctSuccess !== undefined) {
                fctSuccess();
              }
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
          success(function() {
            pages.push(page);
          }).
          error(function(d) {
            console.log('ADD ERROR : '+d);
          });
      },
      removePage: function(fctSuccess) {
        if(currentPageName !== null) {
          $http({
            url: '/service/remove?page='+currentPageName,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            }).
            success(function() {
              for (var i = pages.length - 1; i >= 0; i -= 1) {
                  if (pages[i].name === currentPageName) {
                      pages.splice(i, 1);
                  }
              }
              if (fctSuccess !== undefined) {
                fctSuccess();
              }
              //console.log('PUSH '+d);
            }).
            error(function(d) {
              console.log('REMOVE ERROR : '+d);
            });
        }
      },
      isIndex: function() {
        return currentPageName === 'index';
      },
      getBackground: function () {
        return data.background;
      },
      getCanvas: function () {
        return data.canvas;
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
          borderColor: 'black',
          link: 'none'
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
          selected = data.canvas;
        }
        return selected;
      },
      setSelected: function (element) {
        selected = element;
      },
      removeSelected: function () {
        var i;
        for(i=0;i<data.zones.text.length;i++) {
          if(data.zones.text[i].id === selected.id) {
            selected = data.canvas;
            data.zones.text.splice(i,1);
            return;
          }
        }
        for(i=0;i<data.zones.image.length;i++) {
          if(data.zones.image[i].id === selected.id) {
            selected = data.canvas;
            data.zones.image.splice(i,1);
            return;
          }
        }
        for(i=0;i<data.zones.zone.length;i++) {
          if(data.zones.zone[i].id === selected.id) {
            selected = data.canvas;
            data.zones.zone.splice(i,1);
            return;
          }
        }
      }
    };
  }])
;
