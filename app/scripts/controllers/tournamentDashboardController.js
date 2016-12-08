'use strict';


angular.module('paintfusionApp')
  .controller('TournamentDashboardCtrl', function ($scope, $stateParams, apiService, sqlService, autreService) {
    $scope.tournament=$stateParams.tournament;
    $scope.server=$stateParams.server;
    $scope.dataOk = false;

    sqlService.getTournament($scope.server,$scope.tournament).then(function(data){
      $scope.data = data.data;
      $scope.dataOk = true;
    }, function (reason) {
      console.log(reason);
    });

  });
