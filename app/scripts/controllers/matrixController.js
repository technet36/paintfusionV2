'use strict';

angular.module('paintfusionApp')
  .controller('MatrixCtrl', function($scope, $state, $stateParams, apiService) {

    apiService.getStats($scope.gameId,$scope.server).then(function(stats){
      var himself = _.find(stats.stats.participants, function (o) {
        return o.participantId == _.find(stats.stats.participantIdentities, function (o){return o.player.summonerId == $scope.sumId}).participantId;
      });
      var hisTeam = _.filter(stats.stats.participants, function (o) {
        return o.teamId == himself.teamId;
      });
      var teamMatrix = {
        'nbKill':0,
        'nbDeath':0,
        'totWardPlaced':0,
        'totDamageDealt':0,
        'totDamageTaken0to10':0,
        'totDamageTaken10to20':0,
        'totDamageTaken20to30':0,
        'totDamageTaken30':0,
        'totHeal':0,
        'totCc':0
      };
      hisTeam.forEach(function(teammate) {
        teamMatrix.nbKill += teammate.stats.kills;
        teamMatrix.nbKill += teammate.stats.assists;
        teamMatrix.nbDeath += teammate.stats.deaths;
        teamMatrix.totWardPlaced+= teammate.stats.wardsPlaced;
        teamMatrix.totDamageDealt+= teammate.stats.totalDamageDealtToChampions;
        teamMatrix.totDamageTaken0to10+= teammate.timeline.damageTakenPerMinDeltas.zeroToTen;
        teamMatrix.totDamageTaken10to20+= teammate.timeline.damageTakenPerMinDeltas.tenToTwenty;
        teamMatrix.totDamageTaken20to30+= teammate.timeline.damageTakenPerMinDeltas.twentyToThirty;
        teamMatrix.totDamageTaken30 += teammate.timeline.damageTakenPerMinDeltas.thirtyToEnd;
        teamMatrix.totHeal += teammate.stats.totalHeal;
        teamMatrix.totCc += teammate.stats.totalTimeCrowdControlDealt;
      });

      var enemyWard = 0;
       var enemyTeam = _.filter(stats.stats.participants, function (o) {
        return o.teamId == (himself.teamId%200)+100;
      });
      enemyTeam.forEach(function(enemy){
       enemyWard += enemy.stats.wardsPlaced;
      });

      var matrix = {
        'killP':(himself.stats.kills+himself.stats.assists)/teamMatrix.nbKill*100,
        'deathP':himself.stats.deaths/teamMatrix.nbDeath*100,
        'wardPlaced':himself.stats.wardsPlaced/teamMatrix.totWardPlaced*100,
        "damageDealt":himself.stats.totalDamageDealtToChampions/teamMatrix.totDamageDealt*100,
        "damageTaken0to10":himself.timeline.damageTakenPerMinDeltas.zeroToTen/teamMatrix.totDamageTaken0to10*100,
        "damageTaken10to20":himself.timeline.damageTakenPerMinDeltas.tenToTwenty/teamMatrix.totDamageTaken10to20*100,
        "damageTaken20to30":himself.timeline.damageTakenPerMinDeltas.twentyToThirty/teamMatrix.totDamageTaken20to30*100,
        'damageTaken30':himself.timeline.damageTakenPerMinDeltas.thirtyToEnd/teamMatrix.totDamageTaken30*100,
        'heal':himself.stats.totalHeal/teamMatrix.totHeal*100,
        'wardKilled':himself.stats.wardsKilled/enemyWard*100,
        'cc':himself.stats.totalTimeCrowdControlDealt/teamMatrix.totCc*100,
        "goldLane0to10":himself.timeline.creepsPerMinDeltas.zeroToTen*187,
        "goldFight0to10":himself.timeline.goldPerMinDeltas.zeroToTen*10 -1482 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
        "goldLane10to20":himself.timeline.creepsPerMinDeltas.tenToTwenty*187,
        "goldFight10to20":himself.timeline.goldPerMinDeltas.tenToTwenty*10 -1227 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
        "goldLane20to30":himself.timeline.creepsPerMinDeltas.twentyToThirty*187,
        "goldFight20to30":himself.timeline.goldPerMinDeltas.twentyToThirty*10 -1227 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
        "goldLane30":himself.timeline.creepsPerMinDeltas.thirtyToEnd*187,
        "goldFight30":himself.timeline.goldPerMinDeltas.thirtyToEnd*10 -(2.045*(stats.matchDuration-1800)) -(himself.timeline.creepsPerMinDeltas.zeroToTen*187)
      };

      console.log(enemyWard,himself.stats.wardsKilled);

      $(function () {
        // Age categories
        var categories = ['K/D ', 'vision', 'gold', 'damage'];
        $(document).ready(function () {
          Highcharts.chart('container', {
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Efficiency'
            },
            subtitle: {
              text: 'Winrate: 54%'
            },
            xAxis: [{
              categories: categories,
              reversed: false,
              labels: {
                step: 1
              }
            }, { // mirror axis on right side
              opposite: true,
              reversed: false,
              categories: categories,
              linkedTo: 0,
              labels: {
                step: 1
              }
            }],
            yAxis: {
              title: {
                text: null
              },
              labels: {
                formatter: function () {
                  return Math.abs(this.value) + '%';
                }
              }
            },
            plotOptions: {
              series: {
                stacking: 'percent'
              }
            },
            tooltip: {
              formatter: function () {
                return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                  'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
              }
            },

            series: [{
              name:"defense",
              data: [-1*matrix.deathP, -1*matrix.wardKilled, 0, 0]
            }, {
              name:"offense",
              data: [matrix.killP, matrix.wardPlaced, 0, matrix.damageDealt]
            }, {
              name:"delta",
              data: [0, 0, -1*matrix.goldLane0to10, -1*matrix.damageTaken0to10]
            }, {
              name:"delta",
              data: [0, 0, -1*matrix.goldLane10to20, -1*matrix.damageTaken10to20]
            }, {
              name:"delta",
              data: [0, 0, -1*matrix.goldLane20to30, -1*matrix.damageTaken20to30]
            }, {
              name:"delta",
              data: [0, 0, -1*matrix.goldLane30, -1*matrix.damageTaken30]
            }, {
              name:"delta",
              data: [0, 0, matrix.goldFight0to10, 0]
            }, {
              name:"delta",
              data: [0, 0, matrix.goldFight10to20, 0]
            }, {
              name:"delta",
              data: [0, 0, matrix.goldFight20to30, 0]
            }, {
              name:"delta",
              data: [0, 0, matrix.goldFight30, 0]
            }]
          });
        });

      });


    },function(reason){console.log(reason);});


  });



/* test values

 $scope.matchId = 2937738577;
 $scope.sumId = 64976896;
 var stats ={
 "stats": {
 "matchId": 2941944631,
 "region": "EUW",
 "platformId": "EUW1",
 "matchMode": "CLASSIC",
 "matchType": "MATCHED_GAME",
 "matchCreation": 1479661915946,
 "matchDuration": 1557,
 "queueType": "RANKED_FLEX_SR",
 "mapId": 11,
 "season": "PRESEASON2017",
 "matchVersion": "6.22.165.9605",
 "participants": [
 {
 "teamId": 100,
 "spell1Id": 4,
 "spell2Id": 11,
 "championId": 121,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 0.2,
 "tenToTwenty": 0.5
 },
 "xpPerMinDeltas": {
 "zeroToTen": 307.2,
 "tenToTwenty": 429.5
 },
 "goldPerMinDeltas": {
 "zeroToTen": 249.5,
 "tenToTwenty": 289.2
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 0,
 "tenToTwenty": -0.5
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": -2.1,
 "tenToTwenty": 3.8
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 650.9,
 "tenToTwenty": 1000
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": 105.6,
 "tenToTwenty": -8.7
 },
 "role": "NONE",
 "lane": "JUNGLE"
 },
 "masteries": [
 {
 "masteryId": 6114,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6141,
 "rank": 1
 },
 {
 "masteryId": 6312,
 "rank": 5
 },
 {
 "masteryId": 6323,
 "rank": 1
 },
 {
 "masteryId": 6331,
 "rank": 5
 },
 {
 "masteryId": 6341,
 "rank": 1
 },
 {
 "masteryId": 6351,
 "rank": 5
 },
 {
 "masteryId": 6362,
 "rank": 1
 }
 ],
 "stats": {
 "winner": false,
 "champLevel": 11,
 "item0": 1400,
 "item1": 3047,
 "item2": 1038,
 "item3": 1028,
 "item4": 3134,
 "item5": 1036,
 "item6": 3340,
 "kills": 4,
 "doubleKills": 1,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 2,
 "deaths": 9,
 "assists": 2,
 "totalDamageDealt": 79493,
 "totalDamageDealtToChampions": 16070,
 "totalDamageTaken": 26725,
 "largestCriticalStrike": 0,
 "totalHeal": 6375,
 "minionsKilled": 14,
 "neutralMinionsKilled": 66,
 "neutralMinionsKilledTeamJungle": 29,
 "neutralMinionsKilledEnemyJungle": 37,
 "goldEarned": 7603,
 "goldSpent": 7075,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 2025,
 "physicalDamageDealtToChampions": 13096,
 "trueDamageDealtToChampions": 948,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 4591,
 "physicalDamageDealt": 67216,
 "trueDamageDealt": 7686,
 "magicDamageTaken": 9046,
 "physicalDamageTaken": 17478,
 "trueDamageTaken": 200,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 9,
 "wardsKilled": 0,
 "largestMultiKill": 2,
 "killingSprees": 1,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 324
 },
 "participantId": 1,
 "runes": [
 {
 "runeId": 5245,
 "rank": 9
 },
 {
 "runeId": 5295,
 "rank": 9
 },
 {
 "runeId": 5317,
 "rank": 9
 },
 {
 "runeId": 5335,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 100,
 "spell1Id": 3,
 "spell2Id": 4,
 "championId": 99,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 0.5,
 "tenToTwenty": 1.1
 },
 "xpPerMinDeltas": {
 "zeroToTen": 294.4,
 "tenToTwenty": 317.5
 },
 "goldPerMinDeltas": {
 "zeroToTen": 136,
 "tenToTwenty": 301.8
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": -1.5,
 "tenToTwenty": -1
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": -21.85,
 "tenToTwenty": -14.4
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 223.6,
 "tenToTwenty": 311.3
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": -30.7,
 "tenToTwenty": -180.5
 },
 "role": "DUO_SUPPORT",
 "lane": "BOTTOM"
 },
 "masteries": [
 {
 "masteryId": 6114,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6142,
 "rank": 1
 },
 {
 "masteryId": 6311,
 "rank": 5
 },
 {
 "masteryId": 6322,
 "rank": 1
 },
 {
 "masteryId": 6331,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 },
 {
 "masteryId": 6351,
 "rank": 5
 },
 {
 "masteryId": 6362,
 "rank": 1
 }
 ],
 "stats": {
 "winner": false,
 "champLevel": 11,
 "item0": 3802,
 "item1": 2010,
 "item2": 3092,
 "item3": 3020,
 "item4": 3108,
 "item5": 1052,
 "item6": 3340,
 "kills": 1,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 0,
 "deaths": 7,
 "assists": 5,
 "totalDamageDealt": 38507,
 "totalDamageDealtToChampions": 9588,
 "totalDamageTaken": 11809,
 "largestCriticalStrike": 0,
 "totalHeal": 138,
 "minionsKilled": 31,
 "neutralMinionsKilled": 0,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 0,
 "goldEarned": 6745,
 "goldSpent": 6085,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 8517,
 "physicalDamageDealtToChampions": 1070,
 "trueDamageDealtToChampions": 0,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 32039,
 "physicalDamageDealt": 6467,
 "trueDamageDealt": 0,
 "magicDamageTaken": 4894,
 "physicalDamageTaken": 6914,
 "trueDamageTaken": 0,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 7,
 "wardsKilled": 0,
 "largestMultiKill": 1,
 "killingSprees": 0,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 183
 },
 "participantId": 2,
 "runes": [
 {
 "runeId": 5273,
 "rank": 9
 },
 {
 "runeId": 5289,
 "rank": 9
 },
 {
 "runeId": 5317,
 "rank": 9
 },
 {
 "runeId": 5357,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 100,
 "spell1Id": 4,
 "spell2Id": 14,
 "championId": 26,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 5,
 "tenToTwenty": 3.1
 },
 "xpPerMinDeltas": {
 "zeroToTen": 405.5,
 "tenToTwenty": 399.1
 },
 "goldPerMinDeltas": {
 "zeroToTen": 198.6,
 "tenToTwenty": 262.4
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": -0.8,
 "tenToTwenty": -3.5
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": -71.9,
 "tenToTwenty": -109.7
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 272,
 "tenToTwenty": 565.5
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": -102.2,
 "tenToTwenty": -247.2
 },
 "role": "SOLO",
 "lane": "MIDDLE"
 },
 "masteries": [
 {
 "masteryId": 6114,
 "rank": 5
 },
 {
 "masteryId": 6123,
 "rank": 1
 },
 {
 "masteryId": 6134,
 "rank": 5
 },
 {
 "masteryId": 6142,
 "rank": 1
 },
 {
 "masteryId": 6311,
 "rank": 5
 },
 {
 "masteryId": 6323,
 "rank": 1
 },
 {
 "masteryId": 6332,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 },
 {
 "masteryId": 6351,
 "rank": 5
 },
 {
 "masteryId": 6362,
 "rank": 1
 }
 ],
 "stats": {
 "winner": false,
 "champLevel": 12,
 "item0": 1056,
 "item1": 3001,
 "item2": 1052,
 "item3": 1058,
 "item4": 1026,
 "item5": 0,
 "item6": 3340,
 "kills": 0,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 0,
 "deaths": 8,
 "assists": 4,
 "totalDamageDealt": 65028,
 "totalDamageDealtToChampions": 9954,
 "totalDamageTaken": 16761,
 "largestCriticalStrike": 0,
 "totalHeal": 859,
 "minionsKilled": 94,
 "neutralMinionsKilled": 0,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 0,
 "goldEarned": 6513,
 "goldSpent": 5935,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 9144,
 "physicalDamageDealtToChampions": 560,
 "trueDamageDealtToChampions": 250,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 56546,
 "physicalDamageDealt": 8232,
 "trueDamageDealt": 250,
 "magicDamageTaken": 8223,
 "physicalDamageTaken": 8450,
 "trueDamageTaken": 88,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 8,
 "wardsKilled": 0,
 "largestMultiKill": 0,
 "killingSprees": 0,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 130
 },
 "participantId": 3,
 "runes": [
 {
 "runeId": 5151,
 "rank": 8
 },
 {
 "runeId": 5175,
 "rank": 9
 },
 {
 "runeId": 5193,
 "rank": 9
 },
 {
 "runeId": 5243,
 "rank": 2
 },
 {
 "runeId": 5245,
 "rank": 1
 },
 {
 "runeId": 5357,
 "rank": 1
 }
 ]
 },
 {
 "teamId": 100,
 "spell1Id": 4,
 "spell2Id": 12,
 "championId": 122,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 3.4,
 "tenToTwenty": 6
 },
 "xpPerMinDeltas": {
 "zeroToTen": 415.5,
 "tenToTwenty": 502.3
 },
 "goldPerMinDeltas": {
 "zeroToTen": 238.5,
 "tenToTwenty": 330.8
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": -1.3,
 "tenToTwenty": 0.6
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": -29.3,
 "tenToTwenty": 57.2
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 473,
 "tenToTwenty": 1029.9
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": 26,
 "tenToTwenty": 273.3
 },
 "role": "SOLO",
 "lane": "TOP"
 },
 "masteries": [
 {
 "masteryId": 6111,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6142,
 "rank": 1
 },
 {
 "masteryId": 6151,
 "rank": 5
 },
 {
 "masteryId": 6162,
 "rank": 1
 },
 {
 "masteryId": 6211,
 "rank": 5
 },
 {
 "masteryId": 6223,
 "rank": 1
 },
 {
 "masteryId": 6231,
 "rank": 5
 },
 {
 "masteryId": 6241,
 "rank": 1
 }
 ],
 "stats": {
 "winner": false,
 "champLevel": 13,
 "item0": 1054,
 "item1": 3071,
 "item2": 3111,
 "item3": 1031,
 "item4": 1011,
 "item5": 0,
 "item6": 3340,
 "kills": 3,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 0,
 "deaths": 5,
 "assists": 0,
 "totalDamageDealt": 73086,
 "totalDamageDealtToChampions": 10153,
 "totalDamageTaken": 21455,
 "largestCriticalStrike": 0,
 "totalHeal": 1500,
 "minionsKilled": 106,
 "neutralMinionsKilled": 1,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 1,
 "goldEarned": 7525,
 "goldSpent": 6750,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 0,
 "physicalDamageDealtToChampions": 8854,
 "trueDamageDealtToChampions": 1298,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 0,
 "physicalDamageDealt": 71788,
 "trueDamageDealt": 1298,
 "magicDamageTaken": 7685,
 "physicalDamageTaken": 13635,
 "trueDamageTaken": 134,
 "firstBloodKill": true,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 2,
 "wardsPlaced": 9,
 "wardsKilled": 1,
 "largestMultiKill": 1,
 "killingSprees": 0,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 142
 },
 "participantId": 4,
 "runes": [
 {
 "runeId": 5245,
 "rank": 9
 },
 {
 "runeId": 5289,
 "rank": 9
 },
 {
 "runeId": 5317,
 "rank": 9
 },
 {
 "runeId": 5335,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 100,
 "spell1Id": 4,
 "spell2Id": 7,
 "championId": 67,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 4.9,
 "tenToTwenty": 5.3
 },
 "xpPerMinDeltas": {
 "zeroToTen": 265,
 "tenToTwenty": 447.8
 },
 "goldPerMinDeltas": {
 "zeroToTen": 207.2,
 "tenToTwenty": 351.7
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": -1.5,
 "tenToTwenty": -1
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": -21.85,
 "tenToTwenty": -14.4
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 213,
 "tenToTwenty": 303.9
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": -30.7,
 "tenToTwenty": -180.5
 },
 "role": "DUO_CARRY",
 "lane": "BOTTOM"
 },
 "masteries": [
 {
 "masteryId": 6111,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6142,
 "rank": 1
 },
 {
 "masteryId": 6151,
 "rank": 5
 },
 {
 "masteryId": 6161,
 "rank": 1
 },
 {
 "masteryId": 6312,
 "rank": 5
 },
 {
 "masteryId": 6322,
 "rank": 1
 },
 {
 "masteryId": 6331,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 }
 ],
 "stats": {
 "winner": false,
 "champLevel": 12,
 "item0": 1042,
 "item1": 1038,
 "item2": 1051,
 "item3": 3153,
 "item4": 0,
 "item5": 3006,
 "item6": 3340,
 "kills": 2,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 2,
 "deaths": 3,
 "assists": 3,
 "totalDamageDealt": 54829,
 "totalDamageDealtToChampions": 7971,
 "totalDamageTaken": 8905,
 "largestCriticalStrike": 356,
 "totalHeal": 1481,
 "minionsKilled": 112,
 "neutralMinionsKilled": 2,
 "neutralMinionsKilledTeamJungle": 1,
 "neutralMinionsKilledEnemyJungle": 1,
 "goldEarned": 7377,
 "goldSpent": 7000,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 52,
 "physicalDamageDealtToChampions": 6182,
 "trueDamageDealtToChampions": 1735,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 52,
 "physicalDamageDealt": 50976,
 "trueDamageDealt": 3799,
 "magicDamageTaken": 3216,
 "physicalDamageTaken": 5613,
 "trueDamageTaken": 76,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 1,
 "wardsPlaced": 9,
 "wardsKilled": 0,
 "largestMultiKill": 1,
 "killingSprees": 1,
 "totalUnitsHealed": 3,
 "totalTimeCrowdControlDealt": 7
 },
 "participantId": 5,
 "runes": [
 {
 "runeId": 5245,
 "rank": 9
 },
 {
 "runeId": 5277,
 "rank": 9
 },
 {
 "runeId": 5317,
 "rank": 9
 },
 {
 "runeId": 5337,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 200,
 "spell1Id": 12,
 "spell2Id": 4,
 "championId": 14,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 4.7,
 "tenToTwenty": 5.4
 },
 "xpPerMinDeltas": {
 "zeroToTen": 444.8,
 "tenToTwenty": 445.1
 },
 "goldPerMinDeltas": {
 "zeroToTen": 264.6,
 "tenToTwenty": 375.4
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 1.3,
 "tenToTwenty": -0.6
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": 29.3,
 "tenToTwenty": -57.2
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 447,
 "tenToTwenty": 756.6
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": -26,
 "tenToTwenty": -273.3
 },
 "role": "SOLO",
 "lane": "TOP"
 },
 "masteries": [
 {
 "masteryId": 6212,
 "rank": 5
 },
 {
 "masteryId": 6223,
 "rank": 1
 },
 {
 "masteryId": 6232,
 "rank": 5
 },
 {
 "masteryId": 6243,
 "rank": 1
 },
 {
 "masteryId": 6252,
 "rank": 5
 },
 {
 "masteryId": 6262,
 "rank": 1
 },
 {
 "masteryId": 6311,
 "rank": 5
 },
 {
 "masteryId": 6322,
 "rank": 1
 },
 {
 "masteryId": 6332,
 "rank": 5
 },
 {
 "masteryId": 6342,
 "rank": 1
 }
 ],
 "stats": {
 "winner": true,
 "champLevel": 14,
 "item0": 2033,
 "item1": 3065,
 "item2": 3047,
 "item3": 1011,
 "item4": 3068,
 "item5": 3801,
 "item6": 3340,
 "kills": 9,
 "doubleKills": 1,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 3,
 "deaths": 5,
 "assists": 5,
 "totalDamageDealt": 91719,
 "totalDamageDealtToChampions": 13547,
 "totalDamageTaken": 19305,
 "largestCriticalStrike": 0,
 "totalHeal": 7545,
 "minionsKilled": 118,
 "neutralMinionsKilled": 3,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 3,
 "goldEarned": 10337,
 "goldSpent": 9100,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 6223,
 "physicalDamageDealtToChampions": 7239,
 "trueDamageDealtToChampions": 84,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 54229,
 "physicalDamageDealt": 36326,
 "trueDamageDealt": 1164,
 "magicDamageTaken": 2682,
 "physicalDamageTaken": 14856,
 "trueDamageTaken": 1766,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": true,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 10,
 "wardsKilled": 0,
 "largestMultiKill": 2,
 "killingSprees": 3,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 698
 },
 "participantId": 6,
 "runes": [
 {
 "runeId": 5125,
 "rank": 9
 },
 {
 "runeId": 5167,
 "rank": 9
 },
 {
 "runeId": 5193,
 "rank": 9
 },
 {
 "runeId": 5225,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 200,
 "spell1Id": 4,
 "spell2Id": 12,
 "championId": 75,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 5.8,
 "tenToTwenty": 6.6
 },
 "xpPerMinDeltas": {
 "zeroToTen": 477.4,
 "tenToTwenty": 508.8
 },
 "goldPerMinDeltas": {
 "zeroToTen": 241.6,
 "tenToTwenty": 445.2
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 0.8,
 "tenToTwenty": 3.5
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": 71.9,
 "tenToTwenty": 109.7
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 374.2,
 "tenToTwenty": 812.7
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": 102.2,
 "tenToTwenty": 247.2
 },
 "role": "SOLO",
 "lane": "MIDDLE"
 },
 "masteries": [
 {
 "masteryId": 6114,
 "rank": 5
 },
 {
 "masteryId": 6122,
 "rank": 1
 },
 {
 "masteryId": 6134,
 "rank": 5
 },
 {
 "masteryId": 6141,
 "rank": 1
 },
 {
 "masteryId": 6312,
 "rank": 5
 },
 {
 "masteryId": 6323,
 "rank": 1
 },
 {
 "masteryId": 6332,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 },
 {
 "masteryId": 6351,
 "rank": 5
 },
 {
 "masteryId": 6362,
 "rank": 1
 }
 ],
 "stats": {
 "winner": true,
 "champLevel": 15,
 "item0": 2033,
 "item1": 3092,
 "item2": 3041,
 "item3": 1058,
 "item4": 1028,
 "item5": 1052,
 "item6": 3340,
 "kills": 5,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 3,
 "deaths": 1,
 "assists": 12,
 "totalDamageDealt": 106715,
 "totalDamageDealtToChampions": 15531,
 "totalDamageTaken": 15881,
 "largestCriticalStrike": 0,
 "totalHeal": 1293,
 "minionsKilled": 156,
 "neutralMinionsKilled": 0,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 0,
 "goldEarned": 11384,
 "goldSpent": 7585,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 13407,
 "physicalDamageDealtToChampions": 2123,
 "trueDamageDealtToChampions": 0,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 81129,
 "physicalDamageDealt": 25585,
 "trueDamageDealt": 0,
 "magicDamageTaken": 6744,
 "physicalDamageTaken": 8864,
 "trueDamageTaken": 272,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": true,
 "firstTowerAssist": false,
 "firstInhibitorKill": true,
 "firstInhibitorAssist": false,
 "inhibitorKills": 1,
 "towerKills": 2,
 "wardsPlaced": 9,
 "wardsKilled": 0,
 "largestMultiKill": 1,
 "killingSprees": 2,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 97
 },
 "participantId": 7,
 "runes": [
 {
 "runeId": 5151,
 "rank": 9
 },
 {
 "runeId": 5175,
 "rank": 9
 },
 {
 "runeId": 5199,
 "rank": 9
 },
 {
 "runeId": 5235,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 200,
 "spell1Id": 7,
 "spell2Id": 4,
 "championId": 81,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 6.9,
 "tenToTwenty": 6.3
 },
 "xpPerMinDeltas": {
 "zeroToTen": 315,
 "tenToTwenty": 417.8
 },
 "goldPerMinDeltas": {
 "zeroToTen": 296,
 "tenToTwenty": 483.1
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 1.5,
 "tenToTwenty": 1
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": 21.85,
 "tenToTwenty": 14.4
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 199.8,
 "tenToTwenty": 255.5
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": 30.7,
 "tenToTwenty": 180.5
 },
 "role": "DUO_CARRY",
 "lane": "BOTTOM"
 },
 "masteries": [
 {
 "masteryId": 6111,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6141,
 "rank": 1
 },
 {
 "masteryId": 6151,
 "rank": 5
 },
 {
 "masteryId": 6161,
 "rank": 1
 },
 {
 "masteryId": 6312,
 "rank": 5
 },
 {
 "masteryId": 6322,
 "rank": 1
 },
 {
 "masteryId": 6331,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 }
 ],
 "stats": {
 "winner": true,
 "champLevel": 13,
 "item0": 3144,
 "item1": 3042,
 "item2": 3078,
 "item3": 1055,
 "item4": 3158,
 "item5": 1043,
 "item6": 3340,
 "kills": 15,
 "doubleKills": 3,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 15,
 "deaths": 0,
 "assists": 7,
 "totalDamageDealt": 111368,
 "totalDamageDealtToChampions": 23131,
 "totalDamageTaken": 9788,
 "largestCriticalStrike": 0,
 "totalHeal": 1511,
 "minionsKilled": 174,
 "neutralMinionsKilled": 1,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 1,
 "goldEarned": 13137,
 "goldSpent": 10133,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 6110,
 "physicalDamageDealtToChampions": 17021,
 "trueDamageDealtToChampions": 0,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 12369,
 "physicalDamageDealt": 98999,
 "trueDamageDealt": 0,
 "magicDamageTaken": 3781,
 "physicalDamageTaken": 5690,
 "trueDamageTaken": 316,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": true,
 "inhibitorKills": 0,
 "towerKills": 3,
 "wardsPlaced": 6,
 "wardsKilled": 0,
 "largestMultiKill": 2,
 "killingSprees": 1,
 "totalUnitsHealed": 2,
 "totalTimeCrowdControlDealt": 0
 },
 "participantId": 8,
 "runes": [
 {
 "runeId": 5123,
 "rank": 9
 },
 {
 "runeId": 5167,
 "rank": 9
 },
 {
 "runeId": 5195,
 "rank": 9
 },
 {
 "runeId": 5213,
 "rank": 3
 }
 ]
 },
 {
 "teamId": 200,
 "spell1Id": 11,
 "spell2Id": 4,
 "championId": 5,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 0.2,
 "tenToTwenty": 1
 },
 "xpPerMinDeltas": {
 "zeroToTen": 309.3,
 "tenToTwenty": 425.7
 },
 "goldPerMinDeltas": {
 "zeroToTen": 222.7,
 "tenToTwenty": 332.9
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 0,
 "tenToTwenty": 0.5
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": 2.1,
 "tenToTwenty": -3.8
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 545.3,
 "tenToTwenty": 1008.7
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": -105.6,
 "tenToTwenty": 8.7
 },
 "role": "NONE",
 "lane": "JUNGLE"
 },
 "masteries": [
 {
 "masteryId": 6114,
 "rank": 5
 },
 {
 "masteryId": 6121,
 "rank": 1
 },
 {
 "masteryId": 6131,
 "rank": 5
 },
 {
 "masteryId": 6141,
 "rank": 1
 },
 {
 "masteryId": 6311,
 "rank": 5
 },
 {
 "masteryId": 6323,
 "rank": 1
 },
 {
 "masteryId": 6331,
 "rank": 5
 },
 {
 "masteryId": 6343,
 "rank": 1
 },
 {
 "masteryId": 6351,
 "rank": 2
 },
 {
 "masteryId": 6352,
 "rank": 3
 },
 {
 "masteryId": 6362,
 "rank": 1
 }
 ],
 "stats": {
 "winner": true,
 "champLevel": 13,
 "item0": 1419,
 "item1": 3047,
 "item2": 3102,
 "item3": 1043,
 "item4": 0,
 "item5": 2031,
 "item6": 3340,
 "kills": 3,
 "doubleKills": 1,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 2,
 "deaths": 2,
 "assists": 5,
 "totalDamageDealt": 97569,
 "totalDamageDealtToChampions": 7925,
 "totalDamageTaken": 19122,
 "largestCriticalStrike": 253,
 "totalHeal": 9766,
 "minionsKilled": 44,
 "neutralMinionsKilled": 57,
 "neutralMinionsKilledTeamJungle": 36,
 "neutralMinionsKilledEnemyJungle": 21,
 "goldEarned": 8848,
 "goldSpent": 7325,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 1568,
 "physicalDamageDealtToChampions": 5942,
 "trueDamageDealtToChampions": 414,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 13828,
 "physicalDamageDealt": 76588,
 "trueDamageDealt": 7152,
 "magicDamageTaken": 3586,
 "physicalDamageTaken": 14863,
 "trueDamageTaken": 672,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": false,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 7,
 "wardsKilled": 0,
 "largestMultiKill": 2,
 "killingSprees": 1,
 "totalUnitsHealed": 1,
 "totalTimeCrowdControlDealt": 447
 },
 "participantId": 9,
 "runes": [
 {
 "runeId": 5125,
 "rank": 1
 },
 {
 "runeId": 5173,
 "rank": 9
 },
 {
 "runeId": 5243,
 "rank": 2
 },
 {
 "runeId": 5245,
 "rank": 8
 },
 {
 "runeId": 5317,
 "rank": 9
 },
 {
 "runeId": 5337,
 "rank": 1
 }
 ]
 },
 {
 "teamId": 200,
 "spell1Id": 3,
 "spell2Id": 4,
 "championId": 53,
 "highestAchievedSeasonTier": "UNRANKED",
 "timeline": {
 "creepsPerMinDeltas": {
 "zeroToTen": 1.5,
 "tenToTwenty": 2.1
 },
 "xpPerMinDeltas": {
 "zeroToTen": 288.1,
 "tenToTwenty": 376.3
 },
 "goldPerMinDeltas": {
 "zeroToTen": 170.7,
 "tenToTwenty": 292
 },
 "csDiffPerMinDeltas": {
 "zeroToTen": 1.5,
 "tenToTwenty": 1
 },
 "xpDiffPerMinDeltas": {
 "zeroToTen": 21.85,
 "tenToTwenty": 14.4
 },
 "damageTakenPerMinDeltas": {
 "zeroToTen": 298.2,
 "tenToTwenty": 720.7
 },
 "damageTakenDiffPerMinDeltas": {
 "zeroToTen": 30.7,
 "tenToTwenty": 180.5
 },
 "role": "DUO_SUPPORT",
 "lane": "BOTTOM"
 },
 "masteries": [
 {
 "masteryId": 6211,
 "rank": 5
 },
 {
 "masteryId": 6221,
 "rank": 1
 },
 {
 "masteryId": 6231,
 "rank": 5
 },
 {
 "masteryId": 6242,
 "rank": 1
 },
 {
 "masteryId": 6252,
 "rank": 5
 },
 {
 "masteryId": 6262,
 "rank": 1
 },
 {
 "masteryId": 6311,
 "rank": 5
 },
 {
 "masteryId": 6322,
 "rank": 1
 },
 {
 "masteryId": 6332,
 "rank": 5
 },
 {
 "masteryId": 6341,
 "rank": 1
 }
 ],
 "stats": {
 "winner": true,
 "champLevel": 12,
 "item0": 3401,
 "item1": 3117,
 "item2": 2045,
 "item3": 3024,
 "item4": 1029,
 "item5": 0,
 "item6": 3364,
 "kills": 0,
 "doubleKills": 0,
 "tripleKills": 0,
 "quadraKills": 0,
 "pentaKills": 0,
 "unrealKills": 0,
 "largestKillingSpree": 0,
 "deaths": 2,
 "assists": 16,
 "totalDamageDealt": 35653,
 "totalDamageDealtToChampions": 8838,
 "totalDamageTaken": 17663,
 "largestCriticalStrike": 0,
 "totalHeal": 2701,
 "minionsKilled": 46,
 "neutralMinionsKilled": 0,
 "neutralMinionsKilledTeamJungle": 0,
 "neutralMinionsKilledEnemyJungle": 0,
 "goldEarned": 7531,
 "goldSpent": 6200,
 "combatPlayerScore": 0,
 "objectivePlayerScore": 0,
 "totalPlayerScore": 0,
 "totalScoreRank": 0,
 "magicDamageDealtToChampions": 5159,
 "physicalDamageDealtToChampions": 3678,
 "trueDamageDealtToChampions": 0,
 "visionWardsBoughtInGame": 0,
 "sightWardsBoughtInGame": 0,
 "magicDamageDealt": 14204,
 "physicalDamageDealt": 13351,
 "trueDamageDealt": 8098,
 "magicDamageTaken": 3928,
 "physicalDamageTaken": 12531,
 "trueDamageTaken": 1203,
 "firstBloodKill": false,
 "firstBloodAssist": false,
 "firstTowerKill": false,
 "firstTowerAssist": false,
 "firstInhibitorKill": false,
 "firstInhibitorAssist": true,
 "inhibitorKills": 0,
 "towerKills": 0,
 "wardsPlaced": 7,
 "wardsKilled": 0,
 "largestMultiKill": 0,
 "killingSprees": 0,
 "totalUnitsHealed": 5,
 "totalTimeCrowdControlDealt": 122
 },
 "participantId": 10,
 "runes": [
 {
 "runeId": 5123,
 "rank": 9
 },
 {
 "runeId": 5167,
 "rank": 9
 },
 {
 "runeId": 5195,
 "rank": 9
 },
 {
 "runeId": 5213,
 "rank": 1
 },
 {
 "runeId": 5243,
 "rank": 2
 }
 ]
 }
 ],
 "participantIdentities": [
 {
 "participantId": 1,
 "player": {
 "summonerId": 72230261,
 "summonerName": "Dragon tonarees",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/221096621",
 "profileIcon": 1398
 }
 },
 {
 "participantId": 2,
 "player": {
 "summonerId": 67569805,
 "summonerName": "Lio01",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/218255962",
 "profileIcon": 1395
 }
 },
 {
 "participantId": 3,
 "player": {
 "summonerId": 66158964,
 "summonerName": "tiiggrr00uu",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/217006729",
 "profileIcon": 1133
 }
 },
 {
 "participantId": 4,
 "player": {
 "summonerId": 64976896,
 "summonerName": "gon1997",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/215529850",
 "profileIcon": 1398
 }
 },
 {
 "participantId": 5,
 "player": {
 "summonerId": 37965083,
 "summonerName": "ZelThoR",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/40701737",
 "profileIcon": 871
 }
 },
 {
 "participantId": 6,
 "player": {
 "summonerId": 56943354,
 "summonerName": "inFamous3SSon",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/209718314",
 "profileIcon": 785
 }
 },
 {
 "participantId": 7,
 "player": {
 "summonerId": 85657425,
 "summonerName": "Karmaflage",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/227166203",
 "profileIcon": 1259
 }
 },
 {
 "participantId": 8,
 "player": {
 "summonerId": 92097064,
 "summonerName": "Vekksy",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/229741470",
 "profileIcon": 1381
 }
 },
 {
 "participantId": 9,
 "player": {
 "summonerId": 86951014,
 "summonerName": "xZegtsa",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/228041315",
 "profileIcon": 1391
 }
 },
 {
 "participantId": 10,
 "player": {
 "summonerId": 86079079,
 "summonerName": "Vaximoz",
 "matchHistoryUri": "/v1/stats/player_history/EUW1/227471738",
 "profileIcon": 20
 }
 }
 ],
 "teams": [
 {
 "teamId": 100,
 "winner": false,
 "firstBlood": true,
 "firstTower": false,
 "firstInhibitor": false,
 "firstBaron": false,
 "firstDragon": false,
 "firstRiftHerald": false,
 "towerKills": 3,
 "inhibitorKills": 0,
 "baronKills": 0,
 "dragonKills": 0,
 "riftHeraldKills": 0,
 "vilemawKills": 0,
 "dominionVictoryScore": 0,
 "bans": [
 {
 "championId": 126,
 "pickTurn": 1
 },
 {
 "championId": 24,
 "pickTurn": 3
 },
 {
 "championId": 51,
 "pickTurn": 5
 }
 ]
 },
 {
 "teamId": 200,
 "winner": true,
 "firstBlood": false,
 "firstTower": true,
 "firstInhibitor": true,
 "firstBaron": false,
 "firstDragon": true,
 "firstRiftHerald": false,
 "towerKills": 8,
 "inhibitorKills": 1,
 "baronKills": 0,
 "dragonKills": 2,
 "riftHeraldKills": 0,
 "vilemawKills": 0,
 "dominionVictoryScore": 0,
 "bans": [
 {
 "championId": 72,
 "pickTurn": 2
 },
 {
 "championId": 157,
 "pickTurn": 4
 },
 {
 "championId": 107,
 "pickTurn": 6
 }
 ]
 }
 ]
 },
 "msg": "ok",
 "code": 0
 };
 */
