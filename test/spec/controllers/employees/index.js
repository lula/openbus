'use strict';

describe('Controller: EmployeesIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('openbusApp'));

  var EmployeesIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmployeesIndexCtrl = $controller('EmployeesIndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
