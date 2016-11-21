'use strict';

angular.module('paintfusionApp')
  .controller('MatrixCtrl', function($scope, $state, $stateParams, apiService) {

$scope.matchId = 2937738577;
    $scope.sumId = 64976896;

   /* apiService.getStats($scope.matchId,$scope.server).then(function(stats){
      console.log(stats);
stats = {
  "stats": {
    "matchId": 2937738577,
    "region": "EUW",
    "platformId": "EUW1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1479467912476,
    "matchDuration": 2988,
    "queueType": "TEAM_BUILDER_DRAFT_UNRANKED_5x5",
    "mapId": 11,
    "season": "PRESEASON2017",
    "matchVersion": "6.22.165.9605",
    "participants": [
      {
        "teamId": 100,
        "spell1Id": 4,
        "spell2Id": 11,
        "championId": 106,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 0.5,
            "tenToTwenty": 1.3,
            "twentyToThirty": 4.4,
            "thirtyToEnd": 2.4
          },
          "xpPerMinDeltas": {
            "zeroToTen": 345.8,
            "tenToTwenty": 343.7,
            "twentyToThirty": 528,
            "thirtyToEnd": 552.33333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 289.4,
            "tenToTwenty": 324.1,
            "twentyToThirty": 429.7,
            "thirtyToEnd": 387.33333333333
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": -0.7,
            "tenToTwenty": 0.6,
            "twentyToThirty": 1.1,
            "thirtyToEnd": -2.4666666666667
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": 29.2,
            "tenToTwenty": 50.9,
            "twentyToThirty": -141.2,
            "thirtyToEnd": -5.6
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 584,
            "tenToTwenty": 1106.1,
            "twentyToThirty": 1404.5,
            "thirtyToEnd": 1783.5333333333
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": -7.5,
            "tenToTwenty": 466.4,
            "twentyToThirty": 295.4,
            "thirtyToEnd": -24.133333333333
          },
          "role": "NONE",
          "lane": "JUNGLE"
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
            "masteryId": 6212,
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
            "masteryId": 6251,
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
            "masteryId": 6321,
            "rank": 1
          }
        ],
        "stats": {
          "winner": true,
          "champLevel": 18,
          "item0": 3110,
          "item1": 3075,
          "item2": 3009,
          "item3": 3742,
          "item4": 3065,
          "item5": 3053,
          "item6": 3364,
          "kills": 9,
          "doubleKills": 0,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 3,
          "deaths": 7,
          "assists": 14,
          "totalDamageDealt": 235543,
          "totalDamageDealtToChampions": 40326,
          "totalDamageTaken": 69195,
          "largestCriticalStrike": 97,
          "totalHeal": 9067,
          "minionsKilled": 103,
          "neutralMinionsKilled": 111,
          "neutralMinionsKilledTeamJungle": 54,
          "neutralMinionsKilledEnemyJungle": 57,
          "goldEarned": 18089,
          "goldSpent": 18625,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 25822,
          "physicalDamageDealtToChampions": 10891,
          "trueDamageDealtToChampions": 3612,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 110885,
          "physicalDamageDealt": 101482,
          "trueDamageDealt": 23175,
          "magicDamageTaken": 20368,
          "physicalDamageTaken": 44427,
          "trueDamageTaken": 4399,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": true,
          "firstInhibitorAssist": false,
          "inhibitorKills": 2,
          "towerKills": 4,
          "wardsPlaced": 2,
          "wardsKilled": 4,
          "largestMultiKill": 1,
          "killingSprees": 3,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 2243
        },
        "participantId": 1,
        "runes": [
          {
            "runeId": 5245,
            "rank": 9
          },
          {
            "runeId": 5290,
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
        "spell1Id": 12,
        "spell2Id": 4,
        "championId": 62,
        "highestAchievedSeasonTier": "GOLD",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 4.7,
            "tenToTwenty": 7.4,
            "twentyToThirty": 5.1,
            "thirtyToEnd": 4
          },
          "xpPerMinDeltas": {
            "zeroToTen": 403.7,
            "tenToTwenty": 609.7,
            "twentyToThirty": 425.6,
            "thirtyToEnd": 447.53333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 249.6,
            "tenToTwenty": 516.3,
            "twentyToThirty": 442.5,
            "thirtyToEnd": 458.6
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": -0.5,
            "tenToTwenty": 1.8,
            "twentyToThirty": 0.1,
            "thirtyToEnd": 0
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": 29.5,
            "tenToTwenty": 178.6,
            "twentyToThirty": -207.7,
            "thirtyToEnd": -97.133333333333
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 556,
            "tenToTwenty": 374.9,
            "twentyToThirty": 1193.7,
            "thirtyToEnd": 1781.1333333333
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": 16.2,
            "tenToTwenty": -505.8,
            "twentyToThirty": -6.0999999999999,
            "thirtyToEnd": 88.133333333333
          },
          "role": "SOLO",
          "lane": "TOP"
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
            "masteryId": 6322,
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
          "winner": true,
          "champLevel": 18,
          "item0": 3742,
          "item1": 3748,
          "item2": 3047,
          "item3": 3071,
          "item4": 3053,
          "item5": 3033,
          "item6": 3340,
          "kills": 18,
          "doubleKills": 1,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 8,
          "deaths": 9,
          "assists": 9,
          "totalDamageDealt": 278754,
          "totalDamageDealtToChampions": 56869,
          "totalDamageTaken": 56330,
          "largestCriticalStrike": 362,
          "totalHeal": 5185,
          "minionsKilled": 257,
          "neutralMinionsKilled": 21,
          "neutralMinionsKilledTeamJungle": 16,
          "neutralMinionsKilledEnemyJungle": 5,
          "goldEarned": 21930,
          "goldSpent": 21500,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 6125,
          "physicalDamageDealtToChampions": 49940,
          "trueDamageDealtToChampions": 804,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 14479,
          "physicalDamageDealt": 261149,
          "trueDamageDealt": 3124,
          "magicDamageTaken": 22191,
          "physicalDamageTaken": 30514,
          "trueDamageTaken": 3624,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": true,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": true,
          "inhibitorKills": 2,
          "towerKills": 4,
          "wardsPlaced": 23,
          "wardsKilled": 5,
          "largestMultiKill": 2,
          "killingSprees": 4,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 329
        },
        "participantId": 2,
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
        "spell1Id": 6,
        "spell2Id": 4,
        "championId": 18,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 5.1,
            "tenToTwenty": 4.4,
            "twentyToThirty": 5.4,
            "thirtyToEnd": 5.5333333333333
          },
          "xpPerMinDeltas": {
            "zeroToTen": 336.9,
            "tenToTwenty": 295.9,
            "twentyToThirty": 445.6,
            "thirtyToEnd": 589.06666666667
          },
          "goldPerMinDeltas": {
            "zeroToTen": 234.9,
            "tenToTwenty": 277.9,
            "twentyToThirty": 345.7,
            "thirtyToEnd": 477.33333333333
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": -2,
            "tenToTwenty": -1.1,
            "twentyToThirty": -0.05,
            "thirtyToEnd": -0.43333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": -14.35,
            "tenToTwenty": -62.45,
            "twentyToThirty": -144.1,
            "thirtyToEnd": -37.066666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 248,
            "tenToTwenty": 316.1,
            "twentyToThirty": 422,
            "thirtyToEnd": 1013.0666666667
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": -15.9,
            "tenToTwenty": -197.8,
            "twentyToThirty": -289,
            "thirtyToEnd": -392.5
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
          "champLevel": 18,
          "item0": 3094,
          "item1": 3153,
          "item2": 3085,
          "item3": 3006,
          "item4": 3031,
          "item5": 3036,
          "item6": 3340,
          "kills": 9,
          "doubleKills": 1,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 3,
          "deaths": 6,
          "assists": 12,
          "totalDamageDealt": 268948,
          "totalDamageDealtToChampions": 43391,
          "totalDamageTaken": 29503,
          "largestCriticalStrike": 665,
          "totalHeal": 4076,
          "minionsKilled": 273,
          "neutralMinionsKilled": 16,
          "neutralMinionsKilledTeamJungle": 7,
          "neutralMinionsKilledEnemyJungle": 9,
          "goldEarned": 19277,
          "goldSpent": 16750,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 3309,
          "physicalDamageDealtToChampions": 40082,
          "trueDamageDealtToChampions": 0,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 38567,
          "physicalDamageDealt": 229782,
          "trueDamageDealt": 599,
          "magicDamageTaken": 12694,
          "physicalDamageTaken": 16205,
          "trueDamageTaken": 604,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 0,
          "wardsPlaced": 11,
          "wardsKilled": 0,
          "largestMultiKill": 2,
          "killingSprees": 2,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 92
        },
        "participantId": 3,
        "runes": [
          {
            "runeId": 5245,
            "rank": 9
          },
          {
            "runeId": 5290,
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
        "teamId": 100,
        "spell1Id": 3,
        "spell2Id": 4,
        "championId": 427,
        "highestAchievedSeasonTier": "GOLD",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 0.1,
            "tenToTwenty": 0.5,
            "twentyToThirty": 1.1,
            "thirtyToEnd": 0.46666666666667
          },
          "xpPerMinDeltas": {
            "zeroToTen": 225.5,
            "tenToTwenty": 166.2,
            "twentyToThirty": 311.5,
            "thirtyToEnd": 480.86666666667
          },
          "goldPerMinDeltas": {
            "zeroToTen": 132.6,
            "tenToTwenty": 267.6,
            "twentyToThirty": 280.5,
            "thirtyToEnd": 320.46666666667
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": -2,
            "tenToTwenty": -1.1,
            "twentyToThirty": -0.05,
            "thirtyToEnd": -0.43333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": -14.35,
            "tenToTwenty": -62.45,
            "twentyToThirty": -144.1,
            "thirtyToEnd": -37.066666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 228.8,
            "tenToTwenty": 439.6,
            "twentyToThirty": 651.2,
            "thirtyToEnd": 802.2
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": -15.9,
            "tenToTwenty": -197.8,
            "twentyToThirty": -289,
            "thirtyToEnd": -392.5
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
            "masteryId": 6243,
            "rank": 1
          },
          {
            "masteryId": 6251,
            "rank": 5
          },
          {
            "masteryId": 6263,
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
          "champLevel": 17,
          "item0": 2045,
          "item1": 3190,
          "item2": 3092,
          "item3": 3107,
          "item4": 3050,
          "item5": 3158,
          "item6": 3364,
          "kills": 1,
          "doubleKills": 0,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 0,
          "deaths": 11,
          "assists": 17,
          "totalDamageDealt": 94535,
          "totalDamageDealtToChampions": 16714,
          "totalDamageTaken": 31277,
          "largestCriticalStrike": 0,
          "totalHeal": 3942,
          "minionsKilled": 26,
          "neutralMinionsKilled": 11,
          "neutralMinionsKilledTeamJungle": 7,
          "neutralMinionsKilledEnemyJungle": 4,
          "goldEarned": 14485,
          "goldSpent": 12625,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 11381,
          "physicalDamageDealtToChampions": 3958,
          "trueDamageDealtToChampions": 1373,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 26499,
          "physicalDamageDealt": 11162,
          "trueDamageDealt": 56873,
          "magicDamageTaken": 9646,
          "physicalDamageTaken": 20466,
          "trueDamageTaken": 1164,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": true,
          "inhibitorKills": 0,
          "towerKills": 0,
          "wardsPlaced": 29,
          "wardsKilled": 14,
          "largestMultiKill": 1,
          "killingSprees": 0,
          "totalUnitsHealed": 3,
          "totalTimeCrowdControlDealt": 419
        },
        "participantId": 4,
        "runes": [
          {
            "runeId": 5255,
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
            "runeId": 5345,
            "rank": 3
          }
        ]
      },
      {
        "teamId": 100,
        "spell1Id": 14,
        "spell2Id": 4,
        "championId": 91,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 5.5,
            "tenToTwenty": 2.6,
            "twentyToThirty": 4.8,
            "thirtyToEnd": 2.5333333333333
          },
          "xpPerMinDeltas": {
            "zeroToTen": 400.5,
            "tenToTwenty": 309.9,
            "twentyToThirty": 407.8,
            "thirtyToEnd": 373.26666666667
          },
          "goldPerMinDeltas": {
            "zeroToTen": 287.4,
            "tenToTwenty": 351.4,
            "twentyToThirty": 361.2,
            "thirtyToEnd": 352.13333333333
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": 2.7,
            "tenToTwenty": -0.3,
            "twentyToThirty": 2.5,
            "thirtyToEnd": -4.1333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": 105.4,
            "tenToTwenty": -35.5,
            "twentyToThirty": 57.5,
            "thirtyToEnd": -343.86666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 452.6,
            "tenToTwenty": 680.7,
            "twentyToThirty": 859.1,
            "thirtyToEnd": 1257.8666666667
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": 46.1,
            "tenToTwenty": 205,
            "twentyToThirty": 660.4,
            "thirtyToEnd": 600.66666666667
          },
          "role": "SOLO",
          "lane": "MIDDLE"
        },
        "masteries": [
          {
            "masteryId": 6111,
            "rank": 5
          },
          {
            "masteryId": 6122,
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
          "champLevel": 18,
          "item0": 3147,
          "item1": 3074,
          "item2": 3142,
          "item3": 3026,
          "item4": 3071,
          "item5": 3158,
          "item6": 3364,
          "kills": 12,
          "doubleKills": 0,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 3,
          "deaths": 18,
          "assists": 14,
          "totalDamageDealt": 169939,
          "totalDamageDealtToChampions": 36042,
          "totalDamageTaken": 47861,
          "largestCriticalStrike": 647,
          "totalHeal": 3284,
          "minionsKilled": 183,
          "neutralMinionsKilled": 15,
          "neutralMinionsKilledTeamJungle": 3,
          "neutralMinionsKilledEnemyJungle": 12,
          "goldEarned": 18411,
          "goldSpent": 19675,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 4153,
          "physicalDamageDealtToChampions": 30184,
          "trueDamageDealtToChampions": 1705,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 6120,
          "physicalDamageDealt": 161944,
          "trueDamageDealt": 1874,
          "magicDamageTaken": 17265,
          "physicalDamageTaken": 27685,
          "trueDamageTaken": 2911,
          "firstBloodKill": true,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 1,
          "wardsPlaced": 15,
          "wardsKilled": 3,
          "largestMultiKill": 1,
          "killingSprees": 2,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 267
        },
        "participantId": 5,
        "runes": [
          {
            "runeId": 5245,
            "rank": 4
          },
          {
            "runeId": 5247,
            "rank": 4
          },
          {
            "runeId": 5251,
            "rank": 1
          },
          {
            "runeId": 5290,
            "rank": 6
          },
          {
            "runeId": 5296,
            "rank": 3
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
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 14,
        "championId": 7,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 2.8,
            "tenToTwenty": 2.9,
            "twentyToThirty": 2.3,
            "thirtyToEnd": 6.6666666666667
          },
          "xpPerMinDeltas": {
            "zeroToTen": 295.1,
            "tenToTwenty": 345.4,
            "twentyToThirty": 350.3,
            "thirtyToEnd": 717.13333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 155.5,
            "tenToTwenty": 265.7,
            "twentyToThirty": 352.9,
            "thirtyToEnd": 530.26666666667
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": -2.7,
            "tenToTwenty": 0.3,
            "twentyToThirty": -2.5,
            "thirtyToEnd": 4.1333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": -105.4,
            "tenToTwenty": 35.5,
            "twentyToThirty": -57.5,
            "thirtyToEnd": 343.86666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 406.5,
            "tenToTwenty": 475.7,
            "twentyToThirty": 198.7,
            "thirtyToEnd": 657.2
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": -46.1,
            "tenToTwenty": -205,
            "twentyToThirty": -660.4,
            "thirtyToEnd": -600.66666666667
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
            "masteryId": 6121,
            "rank": 1
          },
          {
            "masteryId": 6134,
            "rank": 5
          },
          {
            "masteryId": 6143,
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
          "champLevel": 18,
          "item0": 3089,
          "item1": 3020,
          "item2": 3157,
          "item3": 3108,
          "item4": 3285,
          "item5": 3135,
          "item6": 3363,
          "kills": 9,
          "doubleKills": 1,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 3,
          "deaths": 12,
          "assists": 10,
          "totalDamageDealt": 218181,
          "totalDamageDealtToChampions": 29164,
          "totalDamageTaken": 26891,
          "largestCriticalStrike": 1275,
          "totalHeal": 2876,
          "minionsKilled": 206,
          "neutralMinionsKilled": 20,
          "neutralMinionsKilledTeamJungle": 20,
          "neutralMinionsKilledEnemyJungle": 0,
          "goldEarned": 18223,
          "goldSpent": 17500,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 25865,
          "physicalDamageDealtToChampions": 1736,
          "trueDamageDealtToChampions": 1563,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 191468,
          "physicalDamageDealt": 20680,
          "trueDamageDealt": 6032,
          "magicDamageTaken": 3124,
          "physicalDamageTaken": 22774,
          "trueDamageTaken": 992,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 0,
          "wardsPlaced": 11,
          "wardsKilled": 0,
          "largestMultiKill": 2,
          "killingSprees": 3,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 49
        },
        "participantId": 6,
        "runes": [
          {
            "runeId": 5273,
            "rank": 9
          },
          {
            "runeId": 5289,
            "rank": 5
          },
          {
            "runeId": 5297,
            "rank": 4
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
        "teamId": 200,
        "spell1Id": 11,
        "spell2Id": 4,
        "championId": 102,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 1.2,
            "tenToTwenty": 0.7,
            "twentyToThirty": 3.3,
            "thirtyToEnd": 4.8666666666667
          },
          "xpPerMinDeltas": {
            "zeroToTen": 316.6,
            "tenToTwenty": 292.8,
            "twentyToThirty": 669.2,
            "thirtyToEnd": 557.93333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 212.1,
            "tenToTwenty": 277.9,
            "twentyToThirty": 390.9,
            "thirtyToEnd": 447.26666666667
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": 0.7,
            "tenToTwenty": -0.6,
            "twentyToThirty": -1.1,
            "thirtyToEnd": 2.4666666666667
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": -29.2,
            "tenToTwenty": -50.9,
            "twentyToThirty": 141.2,
            "thirtyToEnd": 5.6
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 591.5,
            "tenToTwenty": 639.7,
            "twentyToThirty": 1109.1,
            "thirtyToEnd": 1807.6666666667
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": 7.5,
            "tenToTwenty": -466.4,
            "twentyToThirty": -295.4,
            "thirtyToEnd": 24.133333333333
          },
          "role": "NONE",
          "lane": "JUNGLE"
        },
        "masteries": [
          {
            "masteryId": 6114,
            "rank": 1
          },
          {
            "masteryId": 6211,
            "rank": 1
          },
          {
            "masteryId": 6212,
            "rank": 4
          },
          {
            "masteryId": 6223,
            "rank": 1
          },
          {
            "masteryId": 6231,
            "rank": 2
          },
          {
            "masteryId": 6232,
            "rank": 3
          },
          {
            "masteryId": 6242,
            "rank": 1
          },
          {
            "masteryId": 6251,
            "rank": 2
          },
          {
            "masteryId": 6252,
            "rank": 3
          },
          {
            "masteryId": 6261,
            "rank": 1
          },
          {
            "masteryId": 6312,
            "rank": 5
          },
          {
            "masteryId": 6321,
            "rank": 1
          },
          {
            "masteryId": 6331,
            "rank": 5
          }
        ],
        "stats": {
          "winner": false,
          "champLevel": 18,
          "item0": 1416,
          "item1": 3748,
          "item2": 3742,
          "item3": 3047,
          "item4": 3068,
          "item5": 3078,
          "item6": 3340,
          "kills": 9,
          "doubleKills": 0,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 2,
          "deaths": 11,
          "assists": 19,
          "totalDamageDealt": 277679,
          "totalDamageDealtToChampions": 50469,
          "totalDamageTaken": 63528,
          "largestCriticalStrike": 0,
          "totalHeal": 14014,
          "minionsKilled": 152,
          "neutralMinionsKilled": 104,
          "neutralMinionsKilledTeamJungle": 49,
          "neutralMinionsKilledEnemyJungle": 55,
          "goldEarned": 18859,
          "goldSpent": 17708,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 19452,
          "physicalDamageDealtToChampions": 26601,
          "trueDamageDealtToChampions": 4416,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 93959,
          "physicalDamageDealt": 167198,
          "trueDamageDealt": 16522,
          "magicDamageTaken": 13295,
          "physicalDamageTaken": 48257,
          "trueDamageTaken": 1975,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 0,
          "wardsPlaced": 22,
          "wardsKilled": 3,
          "largestMultiKill": 1,
          "killingSprees": 3,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 428
        },
        "participantId": 7,
        "runes": [
          {
            "runeId": 5245,
            "rank": 5
          },
          {
            "runeId": 5255,
            "rank": 4
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
            "rank": 1
          },
          {
            "runeId": 5346,
            "rank": 2
          }
        ]
      },
      {
        "teamId": 200,
        "spell1Id": 4,
        "spell2Id": 12,
        "championId": 150,
        "highestAchievedSeasonTier": "GOLD",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 5.2,
            "tenToTwenty": 5.6,
            "twentyToThirty": 5,
            "thirtyToEnd": 4
          },
          "xpPerMinDeltas": {
            "zeroToTen": 374.2,
            "tenToTwenty": 431.1,
            "twentyToThirty": 633.3,
            "thirtyToEnd": 544.66666666667
          },
          "goldPerMinDeltas": {
            "zeroToTen": 203.9,
            "tenToTwenty": 357,
            "twentyToThirty": 401.6,
            "thirtyToEnd": 404
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": 0.5,
            "tenToTwenty": -1.8,
            "twentyToThirty": -0.1,
            "thirtyToEnd": 0
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": -29.5,
            "tenToTwenty": -178.6,
            "twentyToThirty": 207.7,
            "thirtyToEnd": 97.133333333333
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 539.8,
            "tenToTwenty": 880.7,
            "twentyToThirty": 1199.8,
            "thirtyToEnd": 1693
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": -16.2,
            "tenToTwenty": 505.8,
            "twentyToThirty": 6.0999999999999,
            "thirtyToEnd": -88.133333333333
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
            "masteryId": 6134,
            "rank": 5
          },
          {
            "masteryId": 6142,
            "rank": 1
          },
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
            "masteryId": 6241,
            "rank": 1
          },
          {
            "masteryId": 6251,
            "rank": 5
          },
          {
            "masteryId": 6261,
            "rank": 1
          }
        ],
        "stats": {
          "winner": false,
          "champLevel": 18,
          "item0": 3143,
          "item1": 3071,
          "item2": 3075,
          "item3": 3022,
          "item4": 3068,
          "item5": 3111,
          "item6": 3340,
          "kills": 7,
          "doubleKills": 1,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 4,
          "deaths": 13,
          "assists": 19,
          "totalDamageDealt": 282515,
          "totalDamageDealtToChampions": 41462,
          "totalDamageTaken": 60959,
          "largestCriticalStrike": 380,
          "totalHeal": 6641,
          "minionsKilled": 259,
          "neutralMinionsKilled": 19,
          "neutralMinionsKilledTeamJungle": 9,
          "neutralMinionsKilledEnemyJungle": 10,
          "goldEarned": 18589,
          "goldSpent": 18025,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 12850,
          "physicalDamageDealtToChampions": 27051,
          "trueDamageDealtToChampions": 1560,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 74238,
          "physicalDamageDealt": 198295,
          "trueDamageDealt": 9982,
          "magicDamageTaken": 14598,
          "physicalDamageTaken": 44585,
          "trueDamageTaken": 1776,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 2,
          "wardsPlaced": 16,
          "wardsKilled": 0,
          "largestMultiKill": 2,
          "killingSprees": 1,
          "totalUnitsHealed": 1,
          "totalTimeCrowdControlDealt": 1983
        },
        "participantId": 8,
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
            "runeId": 5337,
            "rank": 3
          }
        ]
      },
      {
        "teamId": 200,
        "spell1Id": 7,
        "spell2Id": 4,
        "championId": 222,
        "highestAchievedSeasonTier": "SILVER",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 7.7,
            "tenToTwenty": 5.7,
            "twentyToThirty": 4.9,
            "thirtyToEnd": 3.6
          },
          "xpPerMinDeltas": {
            "zeroToTen": 329.4,
            "tenToTwenty": 333.2,
            "twentyToThirty": 462,
            "thirtyToEnd": 514.13333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 282.9,
            "tenToTwenty": 341,
            "twentyToThirty": 471.7,
            "thirtyToEnd": 465.46666666667
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": 2,
            "tenToTwenty": 1.1,
            "twentyToThirty": 0.05,
            "thirtyToEnd": 0.43333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": 14.35,
            "tenToTwenty": 62.45,
            "twentyToThirty": 144.1,
            "thirtyToEnd": 37.066666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 331.7,
            "tenToTwenty": 446.1,
            "twentyToThirty": 882.6,
            "thirtyToEnd": 1291.1333333333
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": 15.9,
            "tenToTwenty": 197.8,
            "twentyToThirty": 289,
            "thirtyToEnd": 392.5
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
            "masteryId": 6122,
            "rank": 1
          },
          {
            "masteryId": 6131,
            "rank": 5
          },
          {
            "masteryId": 6143,
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
          "champLevel": 18,
          "item0": 3026,
          "item1": 3031,
          "item2": 3094,
          "item3": 1031,
          "item4": 3085,
          "item5": 3072,
          "item6": 3363,
          "kills": 19,
          "doubleKills": 3,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 4,
          "deaths": 10,
          "assists": 11,
          "totalDamageDealt": 253453,
          "totalDamageDealtToChampions": 52984,
          "totalDamageTaken": 41259,
          "largestCriticalStrike": 889,
          "totalHeal": 8889,
          "minionsKilled": 245,
          "neutralMinionsKilled": 18,
          "neutralMinionsKilledTeamJungle": 14,
          "neutralMinionsKilledEnemyJungle": 4,
          "goldEarned": 20478,
          "goldSpent": 19475,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 3743,
          "physicalDamageDealtToChampions": 45795,
          "trueDamageDealtToChampions": 3445,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 8820,
          "physicalDamageDealt": 228042,
          "trueDamageDealt": 16590,
          "magicDamageTaken": 11965,
          "physicalDamageTaken": 28306,
          "trueDamageTaken": 988,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 1,
          "wardsPlaced": 11,
          "wardsKilled": 1,
          "largestMultiKill": 2,
          "killingSprees": 5,
          "totalUnitsHealed": 3,
          "totalTimeCrowdControlDealt": 654
        },
        "participantId": 9,
        "runes": [
          {
            "runeId": 5213,
            "rank": 1
          },
          {
            "runeId": 5245,
            "rank": 8
          },
          {
            "runeId": 5251,
            "rank": 1
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
            "rank": 1
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
        "championId": 201,
        "highestAchievedSeasonTier": "PLATINUM",
        "timeline": {
          "creepsPerMinDeltas": {
            "zeroToTen": 1.5,
            "tenToTwenty": 1.4,
            "twentyToThirty": 1.7,
            "thirtyToEnd": 3.2666666666667
          },
          "xpPerMinDeltas": {
            "zeroToTen": 261.7,
            "tenToTwenty": 253.8,
            "twentyToThirty": 583.3,
            "thirtyToEnd": 629.93333333333
          },
          "goldPerMinDeltas": {
            "zeroToTen": 174.1,
            "tenToTwenty": 286.4,
            "twentyToThirty": 428,
            "thirtyToEnd": 462.66666666667
          },
          "csDiffPerMinDeltas": {
            "zeroToTen": 2,
            "tenToTwenty": 1.1,
            "twentyToThirty": 0.05,
            "thirtyToEnd": 0.43333333333333
          },
          "xpDiffPerMinDeltas": {
            "zeroToTen": 14.35,
            "tenToTwenty": 62.45,
            "twentyToThirty": 144.1,
            "thirtyToEnd": 37.066666666667
          },
          "damageTakenPerMinDeltas": {
            "zeroToTen": 176.9,
            "tenToTwenty": 705.2,
            "twentyToThirty": 768.6,
            "thirtyToEnd": 1309.1333333333
          },
          "damageTakenDiffPerMinDeltas": {
            "zeroToTen": 15.9,
            "tenToTwenty": 197.8,
            "twentyToThirty": 289,
            "thirtyToEnd": 392.5
          },
          "role": "DUO_SUPPORT",
          "lane": "BOTTOM"
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
            "masteryId": 6251,
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
          "winner": false,
          "champLevel": 18,
          "item0": 3143,
          "item1": 3083,
          "item2": 2303,
          "item3": 3009,
          "item4": 3075,
          "item5": 3068,
          "item6": 3364,
          "kills": 6,
          "doubleKills": 0,
          "tripleKills": 0,
          "quadraKills": 0,
          "pentaKills": 0,
          "unrealKills": 0,
          "largestKillingSpree": 5,
          "deaths": 3,
          "assists": 33,
          "totalDamageDealt": 128375,
          "totalDamageDealtToChampions": 26801,
          "totalDamageTaken": 45834,
          "largestCriticalStrike": 103,
          "totalHeal": 7557,
          "minionsKilled": 100,
          "neutralMinionsKilled": 9,
          "neutralMinionsKilledTeamJungle": 8,
          "neutralMinionsKilledEnemyJungle": 1,
          "goldEarned": 18341,
          "goldSpent": 15525,
          "combatPlayerScore": 0,
          "objectivePlayerScore": 0,
          "totalPlayerScore": 0,
          "totalScoreRank": 0,
          "magicDamageDealtToChampions": 18864,
          "physicalDamageDealtToChampions": 6218,
          "trueDamageDealtToChampions": 1718,
          "visionWardsBoughtInGame": 0,
          "sightWardsBoughtInGame": 0,
          "magicDamageDealt": 72901,
          "physicalDamageDealt": 33855,
          "trueDamageDealt": 21617,
          "magicDamageTaken": 12897,
          "physicalDamageTaken": 31173,
          "trueDamageTaken": 1763,
          "firstBloodKill": false,
          "firstBloodAssist": false,
          "firstTowerKill": false,
          "firstTowerAssist": false,
          "firstInhibitorKill": false,
          "firstInhibitorAssist": false,
          "inhibitorKills": 0,
          "towerKills": 0,
          "wardsPlaced": 61,
          "wardsKilled": 9,
          "largestMultiKill": 1,
          "killingSprees": 1,
          "totalUnitsHealed": 5,
          "totalTimeCrowdControlDealt": 2449
        },
        "participantId": 10,
        "runes": [
          {
            "runeId": 5247,
            "rank": 6
          },
          {
            "runeId": 5257,
            "rank": 3
          },
          {
            "runeId": 5275,
            "rank": 3
          },
          {
            "runeId": 5295,
            "rank": 6
          },
          {
            "runeId": 5316,
            "rank": 3
          },
          {
            "runeId": 5317,
            "rank": 6
          },
          {
            "runeId": 5335,
            "rank": 3
          }
        ]
      }
    ],
    "participantIdentities": [
      {
        "participantId": 1
      },
      {
        "participantId": 2
      },
      {
        "participantId": 3
      },
      {
        "participantId": 4
      },
      {
        "participantId": 5
      },
      {
        "participantId": 6
      },
      {
        "participantId": 7
      },
      {
        "participantId": 8
      },
      {
        "participantId": 9
      },
      {
        "participantId": 10
      }
    ],
    "teams": [
      {
        "teamId": 100,
        "winner": true,
        "firstBlood": true,
        "firstTower": true,
        "firstInhibitor": true,
        "firstBaron": false,
        "firstDragon": false,
        "firstRiftHerald": false,
        "towerKills": 11,
        "inhibitorKills": 5,
        "baronKills": 0,
        "dragonKills": 1,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 84,
            "pickTurn": 1
          },
          {
            "championId": 111,
            "pickTurn": 3
          },
          {
            "championId": 157,
            "pickTurn": 5
          }
        ]
      },
      {
        "teamId": 200,
        "winner": false,
        "firstBlood": false,
        "firstTower": false,
        "firstInhibitor": false,
        "firstBaron": true,
        "firstDragon": true,
        "firstRiftHerald": false,
        "towerKills": 4,
        "inhibitorKills": 0,
        "baronKills": 2,
        "dragonKills": 4,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 64,
            "pickTurn": 2
          },
          {
            "championId": 238,
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
      var matrix = {
        'winRate':0,
        "goldLane":0,
        "goldFight":0,
        'deathP':0,
        'killP':0,
        'wardKilled':0,
        'wardPlaced':0,
        "damageTaken":0,
        'damageDealt':0,
        'damageBuildings':0,
        'cc':0,
        'heal':0
      };

      matrix.winRate =stats.stats.win?100:0;
      matrix.goldLane =stats.stats.minionsKilled*18.7;
      matrix.goldFight =stats.stats.goldEarned -500 -(2.045*(stats.stats.timePlayed-120)) -(stats.stats.minionsKilled*18.7);
      matrix.deathP =stats.stats.numDeaths;
      matrix.killP =stats.stats.assists +stats.stats.championsKilled;
      matrix.wardKilled = stats.stats.wardKilled;
      matrix.wardPlaced= stats.stats.wardPlaced;
      matrix.damageTaken = stats.stats.totalDamageTaken;
      matrix.damageDealt = stats.stats.totalDamageDealtToChampions;
      matrix.damageBuildings= stats.stats.totalDamageDealtToBuildings;
      matrix.cc= stats.stats.totalTimeCrowdControlDealt;
      matrix.heal= stats.stats.totalHeal;

      console.log(matrix);

      $(function () {
        // Age categories
        var categories = ['gold', 'KDA', 'vision', 'damage', 'other'];
        $(document).ready(function () {
          Highcharts.chart('container', {
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Efficiency'
            },
            subtitle: {
              text: 'Winrate: '+matrix.winRate
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
                stacking: 'normal'
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
              data: [-1*matrix.goldLane, -1*matrix.deathP, -1*matrix.wardKilled, -1*matrix.damageTaken, -1*matrix.damageBuildings]
            }, {
              name:"offense",
              data: [matrix.goldFight, matrix.killP, matrix.wardPlaced, matrix.damageDealt, matrix.cc+matrix.heal]
            }]
          });
        });

      });

    },function(reason){console.log(reason);});*/


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
console.log(himself);
console.log(teamMatrix);
     var history = {
       "stats": {
         "summonerId": 63657737,
         "games": [
           {
             "gameId": 2941048543,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 200,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 0,
             "createDate": 1479636015008,
             "fellowPlayers": [
               {
                 "summonerId": 24169121,
                 "teamId": 200,
                 "championId": 21
               },
               {
                 "summonerId": 45128127,
                 "teamId": 200,
                 "championId": 69
               },
               {
                 "summonerId": 83938581,
                 "teamId": 100,
                 "championId": 103
               },
               {
                 "summonerId": 51742611,
                 "teamId": 200,
                 "championId": 120
               },
               {
                 "summonerId": 82777590,
                 "teamId": 100,
                 "championId": 110
               },
               {
                 "summonerId": 38462954,
                 "teamId": 100,
                 "championId": 58
               },
               {
                 "summonerId": 72374166,
                 "teamId": 200,
                 "championId": 85
               },
               {
                 "summonerId": 70927729,
                 "teamId": 100,
                 "championId": 89
               },
               {
                 "summonerId": 73579725,
                 "teamId": 100,
                 "championId": 121
               }
             ],
             "stats": {
               "level": 4,
               "goldEarned": 3458,
               "minionsKilled": 1,
               "goldSpent": 1775,
               "totalDamageDealt": 55,
               "totalDamageTaken": 15,
               "team": 200,
               "win": false,
               "physicalDamageDealtPlayer": 55,
               "physicalDamageTaken": 15,
               "timePlayed": 1219,
               "item0": 3303,
               "item1": 2010,
               "item2": 1001,
               "item3": 2049,
               "item6": 3341,
               "wardKilled": 1,
               "wardPlaced": 3,
               "playerRole": 2,
               "playerPosition": 4
             }
           },
           {
             "gameId": 2938324965,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 200,
             "championId": 40,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 89,
             "createDate": 1479484242842,
             "fellowPlayers": [
               {
                 "summonerId": 52760315,
                 "teamId": 100,
                 "championId": 122
               },
               {
                 "summonerId": 72871255,
                 "teamId": 200,
                 "championId": 64
               },
               {
                 "summonerId": 71939850,
                 "teamId": 100,
                 "championId": 86
               },
               {
                 "summonerId": 81007320,
                 "teamId": 200,
                 "championId": 80
               },
               {
                 "summonerId": 34950337,
                 "teamId": 100,
                 "championId": 23
               },
               {
                 "summonerId": 46786347,
                 "teamId": 100,
                 "championId": 11
               },
               {
                 "summonerId": 72058513,
                 "teamId": 200,
                 "championId": 51
               },
               {
                 "summonerId": 72273426,
                 "teamId": 200,
                 "championId": 134
               },
               {
                 "summonerId": 42658154,
                 "teamId": 100,
                 "championId": 14
               }
             ],
             "stats": {
               "level": 14,
               "goldEarned": 10267,
               "numDeaths": 2,
               "minionsKilled": 2,
               "goldSpent": 8900,
               "totalDamageDealt": 19782,
               "totalDamageTaken": 12659,
               "team": 200,
               "win": true,
               "neutralMinionsKilled": 1,
               "physicalDamageDealtPlayer": 6772,
               "magicDamageDealtPlayer": 12525,
               "physicalDamageTaken": 10265,
               "magicDamageTaken": 2122,
               "timePlayed": 1862,
               "totalHeal": 6278,
               "totalUnitsHealed": 10,
               "assists": 32,
               "item0": 2302,
               "item1": 3190,
               "item2": 3158,
               "item3": 3107,
               "item4": 3114,
               "item5": 3113,
               "item6": 3364,
               "magicDamageDealtToChampions": 3449,
               "physicalDamageDealtToChampions": 1583,
               "totalDamageDealtToChampions": 5372,
               "trueDamageDealtPlayer": 484,
               "trueDamageDealtToChampions": 339,
               "trueDamageTaken": 272,
               "wardPlaced": 23,
               "neutralMinionsKilledEnemyJungle": 1,
               "totalTimeCrowdControlDealt": 187,
               "playerRole": 2,
               "playerPosition": 4,
               "totalDamageDealtToBuildings": 3179
             }
           },
           {
             "gameId": 2938173204,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 62,
             "createDate": 1479481167694,
             "fellowPlayers": [
               {
                 "summonerId": 34603517,
                 "teamId": 200,
                 "championId": 29
               },
               {
                 "summonerId": 19141822,
                 "teamId": 200,
                 "championId": 240
               },
               {
                 "summonerId": 76449185,
                 "teamId": 100,
                 "championId": 13
               },
               {
                 "summonerId": 77267426,
                 "teamId": 200,
                 "championId": 35
               },
               {
                 "summonerId": 21568221,
                 "teamId": 100,
                 "championId": 7
               },
               {
                 "summonerId": 24675832,
                 "teamId": 200,
                 "championId": 12
               },
               {
                 "summonerId": 76297195,
                 "teamId": 100,
                 "championId": 81
               },
               {
                 "summonerId": 52453558,
                 "teamId": 100,
                 "championId": 84
               },
               {
                 "summonerId": 87348398,
                 "teamId": 200,
                 "championId": 8
               }
             ],
             "stats": {
               "level": 14,
               "goldEarned": 9838,
               "numDeaths": 8,
               "minionsKilled": 20,
               "championsKilled": 6,
               "goldSpent": 9275,
               "totalDamageDealt": 70154,
               "totalDamageTaken": 25031,
               "doubleKills": 1,
               "killingSprees": 2,
               "largestKillingSpree": 2,
               "team": 100,
               "win": false,
               "neutralMinionsKilled": 9,
               "largestMultiKill": 2,
               "physicalDamageDealtPlayer": 7109,
               "magicDamageDealtPlayer": 17777,
               "physicalDamageTaken": 18304,
               "magicDamageTaken": 5073,
               "largestCriticalStrike": 82,
               "timePlayed": 2015,
               "totalHeal": 1771,
               "totalUnitsHealed": 1,
               "assists": 12,
               "item0": 2049,
               "item1": 3190,
               "item2": 3069,
               "item3": 3050,
               "item4": 3158,
               "item5": 1029,
               "item6": 3364,
               "magicDamageDealtToChampions": 6772,
               "physicalDamageDealtToChampions": 3821,
               "totalDamageDealtToChampions": 10619,
               "trueDamageDealtPlayer": 45268,
               "trueDamageDealtToChampions": 26,
               "trueDamageTaken": 1652,
               "wardKilled": 3,
               "wardPlaced": 29,
               "neutralMinionsKilledEnemyJungle": 2,
               "neutralMinionsKilledYourJungle": 7,
               "totalTimeCrowdControlDealt": 274,
               "playerRole": 2,
               "playerPosition": 2
             }
           },
           {
             "gameId": 2937895311,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 57,
             "createDate": 1479478200306,
             "fellowPlayers": [
               {
                 "summonerId": 29355989,
                 "teamId": 200,
                 "championId": 23
               },
               {
                 "summonerId": 21744997,
                 "teamId": 100,
                 "championId": 80
               },
               {
                 "summonerId": 78606833,
                 "teamId": 100,
                 "championId": 92
               },
               {
                 "summonerId": 48539121,
                 "teamId": 200,
                 "championId": 131
               },
               {
                 "summonerId": 51467861,
                 "teamId": 100,
                 "championId": 115
               },
               {
                 "summonerId": 70521571,
                 "teamId": 200,
                 "championId": 412
               },
               {
                 "summonerId": 81421135,
                 "teamId": 200,
                 "championId": 29
               },
               {
                 "summonerId": 83946921,
                 "teamId": 200,
                 "championId": 81
               },
               {
                 "summonerId": 82927132,
                 "teamId": 100,
                 "championId": 133
               }
             ],
             "stats": {
               "level": 13,
               "goldEarned": 8763,
               "numDeaths": 3,
               "minionsKilled": 12,
               "championsKilled": 5,
               "goldSpent": 8550,
               "totalDamageDealt": 38372,
               "totalDamageTaken": 14019,
               "killingSprees": 1,
               "largestKillingSpree": 4,
               "team": 100,
               "win": false,
               "neutralMinionsKilled": 5,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 5373,
               "magicDamageDealtPlayer": 12632,
               "physicalDamageTaken": 8899,
               "magicDamageTaken": 3171,
               "timePlayed": 1788,
               "totalHeal": 1449,
               "totalUnitsHealed": 1,
               "assists": 13,
               "item0": 2049,
               "item1": 3190,
               "item2": 3158,
               "item3": 3050,
               "item4": 3096,
               "item5": 2053,
               "item6": 3341,
               "magicDamageDealtToChampions": 7476,
               "physicalDamageDealtToChampions": 3030,
               "totalDamageDealtToChampions": 10806,
               "trueDamageDealtPlayer": 20365,
               "trueDamageDealtToChampions": 300,
               "trueDamageTaken": 1948,
               "wardKilled": 4,
               "wardPlaced": 16,
               "neutralMinionsKilledEnemyJungle": 3,
               "neutralMinionsKilledYourJungle": 2,
               "totalTimeCrowdControlDealt": 241,
               "playerRole": 2,
               "playerPosition": 4,
               "bountyLevel": 1,
               "totalDamageDealtToBuildings": 213
             }
           },
           {
             "gameId": 2937820224,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 76,
             "createDate": 1479475896309,
             "fellowPlayers": [
               {
                 "summonerId": 44780213,
                 "teamId": 200,
                 "championId": 75
               },
               {
                 "summonerId": 35652973,
                 "teamId": 100,
                 "championId": 126
               },
               {
                 "summonerId": 61929057,
                 "teamId": 200,
                 "championId": 105
               },
               {
                 "summonerId": 29923420,
                 "teamId": 100,
                 "championId": 18
               },
               {
                 "summonerId": 72360822,
                 "teamId": 100,
                 "championId": 34
               },
               {
                 "summonerId": 32647454,
                 "teamId": 100,
                 "championId": 107
               },
               {
                 "summonerId": 24256107,
                 "teamId": 200,
                 "championId": 21
               },
               {
                 "summonerId": 42778816,
                 "teamId": 200,
                 "championId": 120
               },
               {
                 "summonerId": 79369043,
                 "teamId": 200,
                 "championId": 122
               }
             ],
             "stats": {
               "level": 12,
               "goldEarned": 7503,
               "numDeaths": 3,
               "minionsKilled": 13,
               "championsKilled": 3,
               "goldSpent": 5925,
               "totalDamageDealt": 14255,
               "totalDamageTaken": 10880,
               "team": 100,
               "win": true,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 6167,
               "magicDamageDealtPlayer": 7468,
               "physicalDamageTaken": 5704,
               "magicDamageTaken": 4827,
               "timePlayed": 1439,
               "totalHeal": 1435,
               "totalUnitsHealed": 1,
               "assists": 11,
               "item0": 2049,
               "item1": 3105,
               "item2": 3158,
               "item3": 3069,
               "item4": 1029,
               "item6": 3364,
               "magicDamageDealtToChampions": 3960,
               "physicalDamageDealtToChampions": 1892,
               "totalDamageDealtToChampions": 6136,
               "trueDamageDealtPlayer": 619,
               "trueDamageDealtToChampions": 284,
               "trueDamageTaken": 348,
               "wardKilled": 5,
               "wardPlaced": 18,
               "totalTimeCrowdControlDealt": 149,
               "playerRole": 2,
               "playerPosition": 4,
               "totalDamageDealtToBuildings": 610
             }
           },
           {
             "gameId": 2937814758,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 200,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 64,
             "createDate": 1479473868370,
             "fellowPlayers": [
               {
                 "summonerId": 76127682,
                 "teamId": 200,
                 "championId": 20
               },
               {
                 "summonerId": 36426851,
                 "teamId": 200,
                 "championId": 120
               },
               {
                 "summonerId": 64147874,
                 "teamId": 100,
                 "championId": 67
               },
               {
                 "summonerId": 62941487,
                 "teamId": 100,
                 "championId": 6
               },
               {
                 "summonerId": 35500069,
                 "teamId": 200,
                 "championId": 157
               },
               {
                 "summonerId": 85048522,
                 "teamId": 100,
                 "championId": 13
               },
               {
                 "summonerId": 53213490,
                 "teamId": 100,
                 "championId": 86
               },
               {
                 "summonerId": 65992750,
                 "teamId": 100,
                 "championId": 40
               },
               {
                 "summonerId": 49158729,
                 "teamId": 200,
                 "championId": 202
               }
             ],
             "stats": {
               "level": 13,
               "goldEarned": 8887,
               "numDeaths": 8,
               "minionsKilled": 9,
               "championsKilled": 1,
               "goldSpent": 8500,
               "totalDamageDealt": 31221,
               "totalDamageTaken": 23870,
               "team": 200,
               "win": false,
               "neutralMinionsKilled": 2,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 5668,
               "magicDamageDealtPlayer": 14276,
               "physicalDamageTaken": 19427,
               "magicDamageTaken": 3051,
               "timePlayed": 2086,
               "totalHeal": 2368,
               "totalUnitsHealed": 3,
               "assists": 11,
               "item0": 2302,
               "item1": 3190,
               "item2": 3158,
               "item3": 3107,
               "item4": 3801,
               "item5": 1029,
               "item6": 3341,
               "magicDamageDealtToChampions": 6065,
               "physicalDamageDealtToChampions": 3375,
               "totalDamageDealtToChampions": 10496,
               "trueDamageDealtPlayer": 11276,
               "trueDamageDealtToChampions": 1056,
               "trueDamageTaken": 1392,
               "wardKilled": 2,
               "wardPlaced": 20,
               "neutralMinionsKilledEnemyJungle": 2,
               "totalTimeCrowdControlDealt": 274,
               "playerRole": 2,
               "playerPosition": 4
             }
           },
           {
             "gameId": 2937738577,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 427,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 131,
             "createDate": 1479471022136,
             "fellowPlayers": [
               {
                 "summonerId": 30388995,
                 "teamId": 100,
                 "championId": 106
               },
               {
                 "summonerId": 71651182,
                 "teamId": 100,
                 "championId": 91
               },
               {
                 "summonerId": 28311319,
                 "teamId": 200,
                 "championId": 201
               },
               {
                 "summonerId": 65726310,
                 "teamId": 100,
                 "championId": 62
               },
               {
                 "summonerId": 86839001,
                 "teamId": 200,
                 "championId": 222
               },
               {
                 "summonerId": 69791591,
                 "teamId": 100,
                 "championId": 18
               },
               {
                 "summonerId": 27751736,
                 "teamId": 200,
                 "championId": 102
               },
               {
                 "summonerId": 44312128,
                 "teamId": 200,
                 "championId": 7
               },
               {
                 "summonerId": 29366119,
                 "teamId": 200,
                 "championId": 150
               }
             ],
             "stats": {
               "level": 17,
               "goldEarned": 14485,
               "numDeaths": 11,
               "minionsKilled": 26,
               "championsKilled": 1,
               "goldSpent": 12625,
               "totalDamageDealt": 94535,
               "totalDamageTaken": 31277,
               "team": 100,
               "win": true,
               "neutralMinionsKilled": 11,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 11162,
               "magicDamageDealtPlayer": 26499,
               "physicalDamageTaken": 20466,
               "magicDamageTaken": 9646,
               "timePlayed": 2988,
               "totalHeal": 3942,
               "totalUnitsHealed": 3,
               "assists": 17,
               "item0": 2045,
               "item1": 3190,
               "item2": 3092,
               "item3": 3107,
               "item4": 3050,
               "item5": 3158,
               "item6": 3364,
               "magicDamageDealtToChampions": 11381,
               "physicalDamageDealtToChampions": 3958,
               "totalDamageDealtToChampions": 16714,
               "trueDamageDealtPlayer": 56873,
               "trueDamageDealtToChampions": 1373,
               "trueDamageTaken": 1164,
               "wardKilled": 14,
               "wardPlaced": 29,
               "neutralMinionsKilledEnemyJungle": 4,
               "neutralMinionsKilledYourJungle": 7,
               "totalTimeCrowdControlDealt": 419,
               "playerRole": 2,
               "playerPosition": 4,
               "totalDamageDealtToBuildings": 5542
             }
           },
           {
             "gameId": 2937735274,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 427,
             "spell1": 11,
             "spell2": 4,
             "level": 30,
             "ipEarned": 87,
             "createDate": 1479467492547,
             "fellowPlayers": [
               {
                 "summonerId": 19298333,
                 "teamId": 200,
                 "championId": 84
               },
               {
                 "summonerId": 43024463,
                 "teamId": 200,
                 "championId": 121
               },
               {
                 "summonerId": 70947636,
                 "teamId": 100,
                 "championId": 38
               },
               {
                 "summonerId": 46917013,
                 "teamId": 200,
                 "championId": 67
               },
               {
                 "summonerId": 40176809,
                 "teamId": 200,
                 "championId": 92
               },
               {
                 "summonerId": 21512106,
                 "teamId": 200,
                 "championId": 268
               },
               {
                 "summonerId": 38006969,
                 "teamId": 100,
                 "championId": 157
               },
               {
                 "summonerId": 24409910,
                 "teamId": 100,
                 "championId": 59
               },
               {
                 "summonerId": 70342645,
                 "teamId": 100,
                 "championId": 51
               }
             ],
             "stats": {
               "level": 13,
               "goldEarned": 11006,
               "numDeaths": 6,
               "minionsKilled": 4,
               "championsKilled": 3,
               "goldSpent": 9675,
               "totalDamageDealt": 46892,
               "totalDamageTaken": 17004,
               "team": 100,
               "win": true,
               "neutralMinionsKilled": 6,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 7852,
               "magicDamageDealtPlayer": 12895,
               "physicalDamageTaken": 10864,
               "magicDamageTaken": 5647,
               "timePlayed": 1850,
               "totalHeal": 2534,
               "totalUnitsHealed": 1,
               "assists": 23,
               "item0": 2049,
               "item1": 3190,
               "item2": 3069,
               "item3": 3001,
               "item4": 3158,
               "item5": 1028,
               "item6": 3364,
               "magicDamageDealtToChampions": 7182,
               "physicalDamageDealtToChampions": 3188,
               "totalDamageDealtToChampions": 10711,
               "trueDamageDealtPlayer": 26144,
               "trueDamageDealtToChampions": 340,
               "trueDamageTaken": 491,
               "wardKilled": 1,
               "wardPlaced": 15,
               "neutralMinionsKilledEnemyJungle": 6,
               "totalTimeCrowdControlDealt": 226,
               "playerRole": 2,
               "playerPosition": 4,
               "totalDamageDealtToBuildings": 4496
             }
           },
           {
             "gameId": 2937624603,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 201,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 51,
             "createDate": 1479431040445,
             "fellowPlayers": [
               {
                 "summonerId": 92220649,
                 "teamId": 100,
                 "championId": 67
               },
               {
                 "summonerId": 23255400,
                 "teamId": 200,
                 "championId": 37
               },
               {
                 "summonerId": 60799115,
                 "teamId": 200,
                 "championId": 245
               },
               {
                 "summonerId": 24259867,
                 "teamId": 200,
                 "championId": 238
               },
               {
                 "summonerId": 63581496,
                 "teamId": 200,
                 "championId": 11
               },
               {
                 "summonerId": 38596570,
                 "teamId": 200,
                 "championId": 222
               },
               {
                 "summonerId": 75557394,
                 "teamId": 100,
                 "championId": 203
               },
               {
                 "summonerId": 19633488,
                 "teamId": 100,
                 "championId": 50
               },
               {
                 "summonerId": 40339681,
                 "teamId": 100,
                 "championId": 55
               }
             ],
             "stats": {
               "level": 11,
               "goldEarned": 6733,
               "numDeaths": 4,
               "minionsKilled": 50,
               "championsKilled": 1,
               "goldSpent": 6525,
               "totalDamageDealt": 22719,
               "totalDamageTaken": 15154,
               "team": 100,
               "win": false,
               "neutralMinionsKilled": 1,
               "largestMultiKill": 1,
               "physicalDamageDealtPlayer": 8779,
               "magicDamageDealtPlayer": 7358,
               "physicalDamageTaken": 10135,
               "magicDamageTaken": 4738,
               "timePlayed": 1489,
               "totalHeal": 2770,
               "totalUnitsHealed": 5,
               "assists": 8,
               "item0": 2049,
               "item1": 3401,
               "item2": 3109,
               "item3": 3158,
               "item6": 3364,
               "magicDamageDealtToChampions": 3833,
               "physicalDamageDealtToChampions": 1569,
               "totalDamageDealtToChampions": 5403,
               "trueDamageDealtPlayer": 6580,
               "trueDamageTaken": 280,
               "wardKilled": 3,
               "wardPlaced": 13,
               "neutralMinionsKilledEnemyJungle": 1,
               "totalTimeCrowdControlDealt": 307,
               "playerRole": 4,
               "playerPosition": 4
             }
           },
           {
             "gameId": 2937550262,
             "invalid": false,
             "gameMode": "CLASSIC",
             "gameType": "MATCHED_GAME",
             "subType": "NORMAL",
             "mapId": 11,
             "teamId": 100,
             "championId": 40,
             "spell1": 3,
             "spell2": 4,
             "level": 30,
             "ipEarned": 267,
             "createDate": 1479428889698,
             "fellowPlayers": [
               {
                 "summonerId": 32781324,
                 "teamId": 200,
                 "championId": 6
               },
               {
                 "summonerId": 20782651,
                 "teamId": 200,
                 "championId": 99
               },
               {
                 "summonerId": 27310071,
                 "teamId": 100,
                 "championId": 13
               },
               {
                 "summonerId": 25857754,
                 "teamId": 100,
                 "championId": 202
               },
               {
                 "summonerId": 41756055,
                 "teamId": 200,
                 "championId": 104
               },
               {
                 "summonerId": 71459076,
                 "teamId": 200,
                 "championId": 24
               },
               {
                 "summonerId": 25810921,
                 "teamId": 100,
                 "championId": 61
               },
               {
                 "summonerId": 25143735,
                 "teamId": 100,
                 "championId": 64
               },
               {
                 "summonerId": 53383810,
                 "teamId": 200,
                 "championId": 26
               }
             ],
             "stats": {
               "level": 17,
               "goldEarned": 13055,
               "numDeaths": 3,
               "minionsKilled": 13,
               "goldSpent": 11850,
               "totalDamageDealt": 28927,
               "totalDamageTaken": 21308,
               "team": 100,
               "win": true,
               "neutralMinionsKilled": 7,
               "physicalDamageDealtPlayer": 11794,
               "magicDamageDealtPlayer": 15291,
               "physicalDamageTaken": 12414,
               "magicDamageTaken": 8731,
               "timePlayed": 2584,
               "totalHeal": 7988,
               "totalUnitsHealed": 6,
               "assists": 16,
               "item0": 3222,
               "item1": 3190,
               "item2": 2302,
               "item3": 3107,
               "item4": 3158,
               "item5": 3504,
               "item6": 3364,
               "magicDamageDealtToChampions": 2618,
               "physicalDamageDealtToChampions": 1631,
               "totalDamageDealtToChampions": 4469,
               "trueDamageDealtPlayer": 1840,
               "trueDamageDealtToChampions": 219,
               "trueDamageTaken": 162,
               "wardKilled": 3,
               "wardPlaced": 33,
               "neutralMinionsKilledEnemyJungle": 7,
               "totalTimeCrowdControlDealt": 240,
               "playerRole": 2,
               "playerPosition": 4,
               "totalDamageDealtToBuildings": 2614
             }
           }
         ]
       },
       "msg": "ok",
       "code": 0
     };
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
      'cc':himself.stats.totalTimeCrowdControlDealt/teamMatrix.totCc*100,
      "goldLane0to10":himself.timeline.creepsPerMinDeltas.zeroToTen*18.7,
      "goldFight0to10":himself.timeline.goldPerMinDeltas.zeroToTen*10 -1482 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
      "goldLane10to20":himself.timeline.creepsPerMinDeltas.tenToTwenty*18.7,
      "goldFight10to20":himself.timeline.goldPerMinDeltas.tenToTwenty*10 -1227 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
      "goldLane20to30":himself.timeline.creepsPerMinDeltas.twentyToThirty*18.7,
      "goldFight20to30":himself.timeline.goldPerMinDeltas.twentyToThirty*10 -1227 -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7),
      "goldLane30+":himself.timeline.creepsPerMinDeltas.thirtyToEnd*18.7,
      "goldFight30+":himself.timeline.goldPerMinDeltas.thirtyToEnd*10 -(2.045*(stats.matchDuration-1800)) -(himself.timeline.creepsPerMinDeltas.zeroToTen*18.7)
    };

 //   matrix.goldLane =history.stats.games[1].stats.minionsKilled*18.7;
 //   matrix.goldFight =history.stats.games[1].stats.goldEarned -500 -(2.045*(history.stats.games[1].stats.timePlayed-120)) -(history.stats.games[1].stats.minionsKilled*18.7);
 //   matrix.deathP =history.stats.games[1].stats.numDeaths;
 //   matrix.killP = history.stats.games[1].stats.assists?history.stats.games[1].stats.assists:0
 //   matrix.killP += history.stats.games[1].stats.championsKilled?history.stats.games[1].stats.championsKilled:0;
 //   matrix.wardKilled = history.stats.games[1].stats.wardKilled?history.stats.games[1].stats.wardKilled:0;
 //   matrix.wardPlaced= history.stats.games[1].stats.wardPlaced;
 //   matrix.damageTaken = history.stats.games[1].stats.totalDamageTaken;
 //   matrix.damageDealt = history.stats.games[1].stats.totalDamageDealtToChampions;
 //   matrix.damageBuildings= history.stats.games[1].stats.totalDamageDealtToBuildings;
 //   matrix.cc= history.stats.games[1].stats.totalTimeCrowdControlDealt;
  //  matrix.heal= history.stats.games[1].stats.totalHeal;

    console.log(matrix);
/*
    $(function () {
      // Age categories
      var categories = ['gold', 'KDA', 'vision', 'damage', 'other'];
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
            data: [-4, -7, 0, -5, -4]
          }, {
            name:"offense",
            data: [5, 5, 0, 4,5]
          }, {
            name:"delta",
            data: [0, 0, -3, 0,0]
          }, {
            name:"delta",
            data: [0, 0, 2, 0,0]
          }, {
            name:"delta",
            data: [0, 0, -2, 0,0]
          }, {
            name:"delta",
            data: [0, 0, 3, 0,0]
          }, {
            name:"delta",
            data: [0, 0, 1, 0,0]
          }, {
            name:"delta",
            data: [0, 0, -3, 0,0]
          }]
        });
      });

    });*/

  });

