angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr_FR', {"About":"À propos","Catalog":"Catalogue","Gallery":"Gallerie","Home":"Accueil","Pages":"Pages"});
/* jshint +W100 */
}]);