'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('LoginCtrl', function ($state, $scope, apiFactory) {
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
      {"id": "oce", "name": "Oceanie"}
    ];
    $scope.loginForm = {
      "ids": {
        "login": "",
        "server": ""
      },
      "password": ""
    };

  $scope.loginSubmit = function() {
console.log($scope.loginForm.ids);
  };


    $scope.$watch( function(){ return $scope.loginForm.ids}, function(){
     var pseudoExist =  apiFactory.getName($scope.loginForm.ids.login,$scope.loginForm.ids.server);
      console.log('noob');
      console.log(pseudoExist);
    },true);

/*
 .then(function(){
 console.log('pas noob');
 console.log(pseudoExist);

 })
 */
  });
