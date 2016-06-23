'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('LoginCtrl', function ($state, $scope) {
    $scope.tabActive = 'login';
    $scope.showMail = false;
    $scope.pwdReco = function() {
      $scope.showMail = !$scope.showMail;

    };

  });
