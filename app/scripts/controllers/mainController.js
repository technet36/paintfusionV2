'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('MainCtrl', function ($scope, $state, $stateParams,autreService, $location, apiService) {
    var me = autreService.getMe();
    if(!(me || ($stateParams.pseudo && $stateParams.server) ) )$location.path('/login');//if not loggued, redirect to the login page
    $scope.profil = {
      'pseudo':$stateParams.pseudo?$stateParams.pseudo:me.pseudo,
      'server':$stateParams.server?$stateParams.server:me.server,
      'lvl':0,
      'sumId':0,
      'tier':'',
      'division':'',
      'LP':0,
      'icon':0
    };
    $scope.profilOk = 0;

    apiService.getProfileByPseudo($scope.profil.pseudo,$scope.profil.server).then(function(data){
      _.set($scope.profil,'sumId',data.profil.id);
      _.set($scope.profil,'lvl',data.profil.summonerLevel);
      _.set($scope.profil,'icon',data.profil.profileIconId);

      apiService.getLeague($scope.profil.sumId,$scope.profil.server).then(function(data){
        _.set($scope.profil,'tier',data.stats.tier);
        _.set($scope.profil,'division',data.stats.entries[0].division);
        _.set($scope.profil,'LP',data.stats.entries[0].leaguePoints);
      },function(reason){console.log(reason);});

      $scope.profilOk = 1;
    },function(reason){console.log(reason);});

    var matrix =[
      [100,54],//[nbGame,winRate]
      [86,2600],//[% gold in lane, gold in fight]
      [25,59],//[death participation, kill participation]
      [12,0.2],//[(nbWard killed/nbEnnemyWardPlaced)/min,(nbWard)/min]
      [40,110]//[%damage dealt to buildings,% damageDealt+received+cc+heal]
    ];

    if ($scope.profilOk){
    }

  });
