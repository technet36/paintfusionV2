'use strict';

angular.module('paintfusionApp')
.directive('history', function() {
  return {
    restrict: 'E',
    scope: {
      sumId: '=sumId',
      server: '=server'
    },
    controller:'HistoryCtrl',
    templateUrl:'views/partials/historyDirective.html'
  }
})
  .directive('myHeader', function() {
    return {
      restrict: 'E',
      scope: {
        sumId: '=sumId',
        server: '=server'
      },
      controller:'HeaderCtrl',
      templateUrl:'views/partials/headerDirective.html'
    }
  })
  .directive('matrix', function() {
    return {
      restrict: 'E',
      scope: {
        sumId: '=sumId',
        gameId: '=gameId',
        server: '=server'
      },
      controller:'MatrixCtrl',
      templateUrl:'views/partials/matrixDirective.html'
    }
  })
  .directive('infoTournament', function() {
    return {
      restrict: 'E',
      scope: {
        tournamentName: '=tournamentName',
        tournamentServer: '=tournamentServer'
      },
      controller:'InfoTournamentCtrl',
      templateUrl:'views/partials/infoTournamentDirective.html'
    }
  })
  .directive('participantsList', function() {
    return {
      restrict: 'E',
      scope: {
        tournamentId: '=tournamentId'
      },
      controller:'ParticipantsListCtrl',
      templateUrl:'views/partials/participantsListDirective.html'
    }
  })
  .directive('myNav',function() {
    return {
    restrict: 'E',
    controller:'NavCtrl',
    templateUrl:'views/partials/navDirective.html'
    }
  });
