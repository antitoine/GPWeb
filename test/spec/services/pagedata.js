'use strict';

describe('Service: pageData', function () {

  // load the service's module
  beforeEach(module('gpwebApp'));

  // instantiate service
  var pageData;
  beforeEach(inject(function (_pageData_) {
    pageData = _pageData_;
  }));

  it('should do something', function () {
    expect(!!pageData).toBe(true);
  });

});
