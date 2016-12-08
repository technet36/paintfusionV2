'use strict';


angular.module('paintfusionApp')
  .controller('TournamentRegistrationCtrl', function ($scope, sqlService, autreService) {

    $scope.roleTab = ["anything","top","jungle",'mid',"adc","support"];

    $scope.me = autreService.getMe();
    $scope.pseudo = $scope.me.pseudo;

    $scope.role1 = "anything";
    $scope.role2 = "anything";
    $scope.entreTournament = function () {

      sqlService.addUserToTournament($scope.tournamentId,$scope.me.userId,$scope.role1,$scope.role2).then(function (isOk) {
        console.log(isOk);
      }, function (reason) {
        console.log(reason);
      })
    }

  });
