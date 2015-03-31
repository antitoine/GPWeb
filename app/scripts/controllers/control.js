'use strict';

/**
 * @ngdoc function
 * @name gpwebApp.controller:ControlCtrl
 * @description
 * # ControlCtrl
 * Controller of the gpwebApp
 */
angular.module('gpwebApp')
	.controller('ControlCtrl', ['$scope', 'pageData', function ($scope, pageData) {
		 // $scope.config = true; //'views/config.html';
		 $scope.config = {
			  value: true,
			  content:'Essai'
			};
		/* if(selectedItem.type === 'text')
		 {
			 $scope.config = {
			  value: true,
			  content:"Essai"
			};
			 
		 } else if (selectedItem.type === 'image'){
			 $scope.config = {
			  value: true,
			  content:"Essai"
			};
			 
		 } else {
			 $scope.config = {
			  value: true,
			  content:"Essai"
			};
		 }*/
		  
		 // $scope.config.content = { "<h4> Essai </h4>"};
		  $scope.applyChanges = function()
		  {
			  
			  
		  }
 }]);
