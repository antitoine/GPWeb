'use strict';

/**
 * @ngdoc overview
 * @name gpwebApp
 * @description
 * # gpwebApp
 *
 * Main module of the application.
 */
var app = angular.module('gpwebApp', ['ui.bootstrap', 'ngAnimate', 'gettext', 'ngDragDrop']);
app.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('fr_FR');
});
