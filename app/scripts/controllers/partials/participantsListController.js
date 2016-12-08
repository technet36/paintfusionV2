'use strict';


angular.module('paintfusionApp')
  .controller('ParticipantsListCtrl', function ($scope, $stateParams, apiService, sqlService, autreService) {

    $scope.sortType     = 'pseudo'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term


  sqlService.getParticipants($scope.tournamentId).then(function(data){
   console.log(data);
    $scope.participantTab = data.data;
  }, function (reason) {
    console.log(reason);
  });

  });
