'use strict';


angular.module('paintfusionApp')
  .controller('TournamentDashboardCtrl', function ($scope, $stateParams, apiService, sqlService, autreService) {
//$scope.tournament= 'montournois';
    //console.log($scope.tournament);
    $scope.greet="greetings";
    $scope.tournament=$stateParams.tournament;
    $scope.server=$stateParams.server;


  });
