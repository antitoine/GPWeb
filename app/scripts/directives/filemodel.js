'use strict';

/**
 * @ngdoc directive
 * @name gpwebApp.directive:fileModel
 * @description
 * # fileModel
 */
angular.module('gpwebApp')
  .directive('fileModel', ['$http', function ($http) {
    return {
      restrict: 'A',
      scope: {file: "=fileModel"},
      link: function(scope, element, attrs) {
        element.bind('change', function() {
          scope.$apply(function() {
            var fd = new FormData();
            fd.append('image', element[0].files[0]);
            $http.post('/service/upload', fd, {
              headers: {'Content-Type': undefined}
            })
            .success(function(d){
              //console.log('ok:'+angular.toJson(d));
              scope.file = d.url;
            })
            .error(function(d){
              console.log('err:'+angular.toJson(d));
            });
          });
        });
      }
    };
  }]);
