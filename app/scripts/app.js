'use strict';
/*global $ */

/**
 * @ngdoc overview
 * @name gpwebApp
 * @description
 * # gpwebApp
 *
 * Main module of the application.
 */
var app = angular.module('gpwebApp', ['ui.bootstrap', 'ngAnimate', 'gettext']);
app.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('fr_FR');
});