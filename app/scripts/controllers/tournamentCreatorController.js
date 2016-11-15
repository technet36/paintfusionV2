'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('TournamentCreatorCtrl', function ($scope, apiService, sqlService) {
    $scope.greet = "greetings summoner !";
    //sqlService.createTournament("monTournois","moi",1,1,64,"SUMMONERS_RIFT",'2016-11-23 00:00:00','2016-11-22 00:00:00','best tournament ever').then(function(data){console.log(data);},function(reason){console.log(reason);})

    $scope.popup1 = {
      opened: false
    };
    $scope.dt = new Date();


    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

  });
