'use strict';


angular.module('paintfusionApp')
  .controller('TournamentDashboardCtrl', function ($scope, $stateParams, apiService, sqlService, autreService) {
    $scope.tournament=$stateParams.tournament;
    $scope.server=$stateParams.server;

    sqlService.getTournament($scope.server,$scope.tournament).then(function(data){
      $scope.data = data.data;
    }, function (reason) {
      console.log(reason);
    });

  });
