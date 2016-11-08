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
    if(!me)$location.path('/login');//if not loggued, redirect to the login page
    $scope.profil = {
      'pseudo':$stateParams.pseudo,
      'server':$stateParams.server,
      'lvl':0,
      'sumId':0,
      'tier':'',
      'division':'',
      'LP':0,
      'icon':0
    };
    apiService.getProfileByPseudo($scope.profil.pseudo,$scope.profil.server).then(function(data){
      _.set($scope.profil,'sumId',data.profil.id);
      _.set($scope.profil,'lvl',data.profil.summonerLevel);
      _.set($scope.profil,'icon',data.profil.profileIconId);
      apiService.getLeague($scope.profil.sumId,$scope.profil.server).then(function(data){
        _.set($scope.profil,'tier',data.stats.tier);
        _.set($scope.profil,'division',data.stats.entries[0].division);
        _.set($scope.profil,'LP',data.stats.entries[0].leaguePoints);
        console.log($scope.profil);
      },function(reason){console.log(reason);});

      apiService.getHistorique($scope.profil.sumId,$scope.profil.server).then(function(hist){
        console.log(hist.stats.games);
        $scope.games = hist.stats.games;
      });
    },function(reason){console.log(reason);});


    $scope.summonerSpell = function (id){
      return autreService.resolveSummonerSpell(id);
    };
    $scope.champion = function (id){
      return autreService.resolveChampion(id);
    };
      Highcharts.chart('container', {

        chart: {
          type: 'bubble',
          plotBorderWidth: 1,
          zoomType: 'xy'
        },

        title: {
          text: 'Highcharts bubbles with radial gradient fill'
        },

        xAxis: {
          gridLineWidth: 1
        },

        yAxis: {
          startOnTick: false,
          endOnTick: false
        },

        series: [{
          data: [
            [9, 81, 63],
            [98, 5, 89],
            [51, 50, 73],
            [41, 22, 14],
            [58, 24, 20],
            [78, 37, 34],
            [55, 56, 53],
            [18, 45, 70],
            [42, 44, 28],
            [3, 52, 59],
            [31, 18, 97],
            [79, 91, 63],
            [93, 23, 23],
            [44, 83, 22]
          ],
          marker: {
            fillColor: {
              radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
              stops: [
                [0, 'rgba(255,255,255,0.5)'],
                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
              ]
            }
          }
        }, {
          data: [
            [42, 38, 20],
            [6, 18, 1],
            [1, 93, 55],
            [57, 2, 90],
            [80, 76, 22],
            [11, 74, 96],
            [88, 56, 10],
            [30, 47, 49],
            [57, 62, 98],
            [4, 16, 16],
            [46, 10, 11],
            [22, 87, 89],
            [57, 91, 82],
            [45, 15, 98]
          ],
          marker: {
            fillColor: {
              radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
              stops: [
                [0, 'rgba(255,255,255,0.5)'],
                [1, Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
              ]
            }
          }
        }]

      });

  });
