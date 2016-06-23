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
    $scope.serverTab = [
      {"id": "euw", "name": "Europe west"},
      {"id": "na", "name": "North America"},
      {"id": "kr", "name": "Korea"},
      {"id": "eune", "name": "Europe NOrth-East"},
      {"id": "br", "name": "Brazil"},
      {"id": "lan", "name": "Europe west"},
      {"id": "las", "name": "Europe west"},
      {"id": "tr", "name": "Turkey"},
      {"id": "oce", "name": "Oceanie"},

    ]

  });
