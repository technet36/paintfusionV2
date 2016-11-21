'use strict';

angular.module('paintfusionApp')
  .controller('HistoryCtrl', function($scope, $state, $stateParams, apiService, autreService) {
    $scope.isHistoryAvailable = 0;
    //$scope.$watch (function(){ return {'sumId':$scope.sumId, 'server':$scope.server};}, function () {$scope.myParams = 1;});

    $scope.historyRequired = function(){
    if ($scope.sumId && $scope.server){
      apiService.getHistorique($scope.sumId,$scope.server).then(function(hist){
        $scope.games = hist.stats.games;
      },function(reason){console.log(reason);});
    $scope.isHistoryAvailable = 1;
    }
  };

    $scope.summonerSpell = function (id){
      return autreService.resolveSummonerSpell(id);
    };
    $scope.champion = function (id){
      return autreService.resolveChampion(id);
    };

  });

