'use strict';


angular.module('paintfusionApp')
  .controller('ParticipantsListCtrl', function ($scope, $stateParams, apiService, sqlService, autreService) {
    console.log($scope.tournamentId);

    $scope.sortType     = 'summonerId'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term

    $scope.dataOk = false;

  sqlService.getParticipants($scope.tournamentId).then(function(data){
   console.log(data);
    $scope.participantTab = data.data;
  }, function (reason) {
    console.log(reason);
  });

  });
