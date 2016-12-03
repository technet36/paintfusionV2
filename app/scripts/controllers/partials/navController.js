'use strict';

angular.module('paintfusionApp')
  .controller('NavCtrl',function($scope, $location, autreService, apiService){

    $scope.pseudo = autreService.getMe()?autreService.getMe().pseudo:'summoner';
    $scope.serverTab = [
      {"id": "EUW", "name": "Europe west"},
      {"id": "NA", "name": "North America"},
      {"id": "KR", "name": "Korea"},
      {"id": "EUNE", "name": "Europe North-East"},
      {"id": "BR", "name": "Brazil"},
      {"id": "LAN", "name": "Europe west"},
      {"id": "LAS", "name": "Europe west"},
      {"id": "TR", "name": "Turkey"},
      {"id": "OCE", "name": "Oceanie"}
    ];


    $scope.search = function(server,pseudo) {
      $location.path('/dashboard/'+server+'/'+pseudo);
    };
  });

