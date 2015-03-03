'use strict';

describe('Directive: zone', function () {

  // load the directive's module
  beforeEach(module('gpwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<zone></zone>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the zone directive');
  }));
});
