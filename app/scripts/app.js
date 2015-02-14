'use strict';

/**
 * @ngdoc overview
 * @name gpwebApp
 * @description
 * # gpwebApp
 *
 * Main module of the application.
 */
angular.module('gpwebApp', ['ngAnimate']);

/**
 * Angular Animate
 */
angular.module('gpwebApp').animation('.hide-animation-ow', function () {
  return {
    beforeAddClass : function(element, className, done) {
      if (className === 'ng-hide') {
        element.animate({
          opacity: 0
        },500, function(){
            element.css('width',0);
            done();
          }
        );
      } else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if (className === 'ng-hide') {
        element.css('opacity',0);
        element.css('width',"100%");
        element.animate({
          opacity: 1
        }, 500, done);
      } else {
        done();
      }
    }
  };
});

angular.module('gpwebApp').animation('.hide-animation-o', function () {
  return {
    beforeAddClass : function(element, className, done) {
      if (className === 'ng-hide') {
        element.animate({
            opacity: 0
          },500, done);
      } else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if (className === 'ng-hide') {
        element.css('opacity',0);
        element.animate({
          opacity: 1
        }, 500, done);
      } else {
        done();
      }
    }
  };
});
