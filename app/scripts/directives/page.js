'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:page
 * @description
 * # page
 */
angular.module('gpwebApp')
  .directive('page', function () {
    return {
      templateUrl: 'views/page.html',
      restrict: 'E',
      controller: function() {
        this.zones = {
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
      },
      controllerAs: 'page'
    };
  });
