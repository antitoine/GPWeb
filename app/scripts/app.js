'use strict';

/**
 * @ngdoc overview
 * @name gpwebApp
 * @description
 * # gpwebApp
 *
 * Main module of the application.
 */
var app = angular.module('gpwebApp', ['ui.bootstrap', 'ngAnimate', 'gettext', 'ui.layout']);
app.run(function (gettextCatalog) {
  gettextCatalog.setCurrentLanguage('fr_FR');
  jQuery(document).ready(function () {
    jQuery('.ui-layout-container').perfectScrollbar();
  });
});
