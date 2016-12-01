'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paintfusionApp
 */
angular.module('paintfusionApp')
  .controller('TournamentCreatorCtrl', function ($scope, apiService, sqlService, autreService) {
    //sqlService.createTournament("monTournois","moi",1,1,64,"SUMMONERS_RIFT",'2016-11-23 00:00:00','2016-11-22 00:00:00','best tournament ever').then(function(data){console.log(data);},function(reason){console.log(reason);})
console.log(autreService.getMe());
    $scope.timeStamp = new Date;
    $scope.myForm = {
      'name': {
        'default':'',
        'value':'',
        'placeHolder':"My custom tournament",
        'tooltipTemplate':"The name of your tournament",
        'pattern':'^[\\w+\\s]+$'
      },
      'type':{
        'value':'',
        'option':[{
          'name':"Knockout",
          'value':'knockout',
          'tooltipTemplate':"Basics eliminator's stage",
          'image':"../images/tournament_icon.png"
        }, {
          'name':"Knockout + looser bracket",
          'value':'knockoutLB',
          'tooltipTemplate':"eliminator's stage and mini tournament for the firsts loosers",
          'image':"../images/tournament_icon.png"
        }, {
          'name':"Group stage + knockout",
          'value':'groupStageKnockout',
          'tooltipTemplate':"group stage then eliminator's",
          'image':"../images/tournament_icon.png"
        }
        ]},
      'server': {
        'value':'',
        'tooltip':'Choisissez le server sur lequel le tournois se déroulera',
        'option':[{
          'name':"europe West",
          'value':"EUW"
        }, {
          'name':"North America",
          'value':"NA"
        }, {
          'name':"Korea",
          'value':"KR"
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
          'value':"SUMMONERS_RIFT"
        }, {
          'name':"Twisted Treeline",
          'value':"TWISTED_TREELINE"
        }, {
          'name':"Howling Abyss",
          'value':"HOWLING_ABYSS"
        }
      ]},
      'date':{
        'value':$scope.timeStamp,
        'default':$scope.timeStamp,
        'format':'dd-MM-yyyy',
        'isOpen':false,
        'tooltipTemplate':"Choose the date you want your tournament to happened"
      },
      'registrationPeriod':{
        'from':{
          'value':$scope.timeStamp,
          'default':$scope.timeStamp,
          'format':'dd-MM-yyyy',
          'isOpen':false,
          'tooltipTemplate':"Choose the date you want the player to begin to be able to register"
        },
        'to':{
          'value':$scope.timeStamp,
          'default':$scope.timeStamp,
          'format':'dd-MM-yyyy',
          'isOpen':false,
          'tooltipTemplate':"Choose the date you want the player not to be able to register anymore"
        }
      },
      'description':{
        'value':'',
        'default':'',
        'placeHolder':"Better tournament than world's",
        'tooltipTemplate':"Describe the tournament"
      }
    };

    $scope.submit = function(form){
      var formulaire = {
        'name':$scope.myForm.name.value,
        'server':$scope.myForm.server.value,
        'type':$scope.myForm.type.value,
        'maxPlayer':$scope.myForm.maxPlayer.value,
        'map':$scope.myForm.map.value,
        'date':$scope.myForm.date.value,
        'dateMin':$scope.myForm.registrationPeriod.from.value,
        'dateMax':$scope.myForm.registrationPeriod.to.value,
        'privacyLvl':'',
        'host':'technet',
        'description':$scope.myForm.description.value
      }
      //console.log(formulaire);
      sqlService.createTournament(formulaire).then(function(data){console.log(data);},function(reason){console.log(reason);})
    };

  });
