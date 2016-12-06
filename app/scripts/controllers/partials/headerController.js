'use strict';

angular.module('paintfusionApp')
  .controller('HeaderCtrl', function ($scope, $location, apiService, sqlService, autreService) {
    $scope.me = autreService.getMe();
$scope.tournamentList = function () {
  if ($scope.me && !$scope.tournaments){
    sqlService.searchTournament($scope.me.server, $scope.me.sumId).then(function (tournamentTab) {
      console.log(tournamentTab);
      $scope.tournaments = tournamentTab.data;
    },function(reason){
      console.log(reason);
    });
}
}
    $scope.tournamentLink = function(name,server){
      $location.path('/tournament/'+server+'/'+name);
      console.log(name,server);
    };

  });
