'use strict';

describe('Directive: zoneText', function () {

  // load the directive's module
  beforeEach(module('gpwebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<zone-text></zone-text>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the zoneText directive');
  }));
});
