'use strict';


angular.module('paintfusionApp')
  .controller('InfoTournamentCtrl', function ($scope, sqlService) {
    $scope.dataOk = false;
    sqlService.getTournament($scope.tournamentServer,$scope.tournamentName).then(function(data){
      $scope.dataOk = true;
      console.log(data);
      $scope.data = data;

    }, function (reason) {
      console.log(reason);
    });
  });
