'use strict';

/**
 * @ngdoc function
 * @name openbusApp.controller:EmployeesNewCtrl
 * @description
 * # EmployeesNewCtrl
 * Controller of the openbusApp
 */
angular.module('openbusApp')
  .controller('EmployeesNewCtrl', function ($scope, $location, Notification, Employee, $uibModal, $translate) {
    
    $scope.countries = i18n.countries;
    $scope.employee = { address: {} }
    
    $scope.submit = function (form) {
      Notification.init();
            
      if (form.$valid) {
        Employee.api.save($scope.employee,
          function (employee, responseHeaders) {            
            $translate('messages.employee.success.created', {
              employee: employee.name
            }).then(function (msg) {
              Notification.add('success', msg);
            });

            $location.path("/employees/" + employee.id).search({ hasAlerts: true });
          },
          function (httpResponse) {
            $scope.errors = httpResponse.data.errors;            
            var message = httpResponse.data.message || 'Employee creation failed';
            Notification.add('danger', message );
          });
      }
    };
    
    $scope.cancel = function() {
      $location.path("/employees");
    };
    
    $scope.isSaveDisabled = function (form) {
      return !form.$dirty;
    }

    $scope.openCountriesModal = function(selectedCountry, employeeForm) {
      var modal = $uibModal.open({
        templateUrl: 'countriesModal.html',
        controller: 'CountriesModalCtrl',
        resolve: {
          country: selectedCountry
        }
      });
    
      modal.result.then(function(country) {
        $scope.employee.address.country  = country.cca2;
        $scope.employee.address.countryName  = country.name.common;
        employeeForm.$setDirty(true);
      }, function(){
      
      });
    };
    
    $scope.countrySelected = function($item) {
      $scope.employee.address.country = $item.cca2;
    };
    
  });
