'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('LoginCtrl', function ($state, $scope, apiService, sqlService) {
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
        "pseudo": "",
        "server": ""
      },
      "password": ""
    };
    $scope.signupForm = {
      "ids": {
        "pseudo": "",
        "server": ""
      },
      "password": "",
      "passwordConf": "",
      "mail": ""
    };

  $scope.loginSubmit = function() {
console.log($scope.loginForm);
  };
$scope.signupSubmit = function () {
  console.log("form");
  console.log($scope.signupForm);
  if (sqlService.userExist($scope.signupForm.ids.pseudo,$scope.signupForm.ids.server)){
    sqlService.signup($scope.signupForm.ids.pseudo,$scope.signupForm.ids.server,$scope.signupForm.password,$scope.signupForm.mail)
  }
};


    $scope.$watch( function(){ return $scope.loginForm.ids}, function(){
     apiService.getName($scope.loginForm.ids.login,$scope.loginForm.ids.server).then(function(data){
       if (data) console.log('checked IDs');
       console.log(data);
     });
    },true);
  });
