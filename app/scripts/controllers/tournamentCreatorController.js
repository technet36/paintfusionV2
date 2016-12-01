'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('TournamentCreatorCtrl', function ($scope, apiService, sqlService) {
    //sqlService.createTournament("monTournois","moi",1,1,64,"SUMMONERS_RIFT",'2016-11-23 00:00:00','2016-11-22 00:00:00','best tournament ever').then(function(data){console.log(data);},function(reason){console.log(reason);})

    $scope.popup1 = {
      opened: false
    };
    $scope.dt = new Date;

    $scope.myForm = {
      'name': {
        'default':'',
        'value':'',
        'placeHolder':"My custom tournament",
        'tooltipTemplate':"The name of your tournament",
        'pattern':'/^[\w+\s]+$/'
      },
      'type':{
        'value':'',
        'option':[{
          'name':"Knockout",
          'value':'knockout',
          'tooltipTemplate':"Basics eliminator's stage",
          'image':"../images/tournament_icon.png",
          'selected':true
        }, {
          'name':"Knockout + looser bracket",
          'value':'knockoutLB',
          'tooltipTemplate':"eliminator's stage and mini tournament for the firsts loosers",
          'image':"../images/tournament_icon.png",
          'selected':false
        }, {
          'name':"Group stage + knockout",
          'value':'groupStageKnockout',
          'tooltipTemplate':"group stage then eliminator's",
          'image':"../images/tournament_icon.png",
          'selected':false
        }
        ]},
      'server': {
        'value':'',
        'tooltip':'Choisissez le server sur lequel le tournois se déroulera',
        'option':[{
          'name':"europe West",
          'value':"EUW",
          'selected':true
        }, {
          'name':"North America",
          'value':"NA",
          'selected':false
        }, {
          'name':"Korea",
          'value':"KR",
          'selected':false
        }
      ]},
      'maxPlayer': {
        'default':20,
        'value':20,
        'min':10,
        'tooltipTemplate':"The number of players maximum you can afford in your tournament"
      },
      'map':{
        'value':'',
        'tooltip':'choix de la map sur laquelle se deroulera le tournois',
        'option':[{
          'name':"Summoners Rift",
          'value':"SUMMONERS_RIFT",
          'selected':true
        }, {
          'name':"Twisted Treeline",
          'value':"TWISTED_TREELINE",
          'selected':false
        }, {
          'name':"Howling Abyss",
          'value':"HOWLING_ABYSS",
          'selected':false
        }
      ]},
      'date':{
        'value':'',
        'default':Date.now(),
        'minDate':Date.now(),
        'maxDate':0,
        'tooltipTemplate':"Choose the date you want your tournament to happened"
      },
      'registrationPeriod':{
        'value':'',
        'minDate':Date.now(),
        'maxDate':0,
        'tooltipTemplate':"Choose the date you want the player to be able to register"
      },
      'description':{
        'value':'',
        'default':'',
        'placeHolder':"Better tournament than world's",
        'tooltipTemplate':"Describe the tournament"
      }
    };
console.log($scope.myForm.maxPlayer.value);
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

  });
