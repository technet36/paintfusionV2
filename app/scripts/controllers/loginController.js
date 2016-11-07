'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('LoginCtrl', function ($state, $scope, $location, $cookies, sqlService, apiService) {
    $scope.tabActive = 'login';
    $scope.showMail = false;
    $scope.pwdReco = function() {
      $scope.showMail = !$scope.showMail;
    };
    $scope.serverTab = [
      {"id": "EUW", "name": "Europe west"},
      {"id": "NA", "name": "North America"},
      {"id": "KR", "name": "Korea"},
      {"id": "EUNE", "name": "Europe NOrth-East"},
      {"id": "BR", "name": "Brazil"},
      {"id": "LAN", "name": "Europe west"},
      {"id": "LAS", "name": "Europe west"},
      {"id": "TR", "name": "Turkey"},
      {"id": "OCE", "name": "Oceanie"}
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
    //console.log($scope.loginForm);

    sqlService.login($scope.loginForm.ids.pseudo,$scope.loginForm.ids.server,$scope.loginForm.password).then(function(userData) {
      console.log('UserData');
      console.log(userData);
        console.log('well logged');
        $location.path('/profile');
      },function (reason){console.log(reason);});

  };

  $scope.signupSubmit = function () {
  apiService.isRunesPagesOk($scope.signupForm.ids.pseudo,$scope.signupForm.ids.server).then(function(){
      sqlService.signup($scope.signupForm.ids.pseudo,$scope.signupForm.ids.server,$scope.signupForm.password,$scope.signupForm.mail).then(
        function(greet) {$location.path('/profile');},
        function(reason){console.log(reason);}
      );
  },function(reason){
    console.log(reason);
  });
};

/*
    $scope.$watch( function(){ return $scope.loginForm.ids}, function(){
     apiService.getName($scope.loginForm.ids.login,$scope.loginForm.ids.server).then(function(data){
       if (data) console.log('checked IDs');
       console.log(data);
     });
    },true);

    */
  });
