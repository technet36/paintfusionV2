'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:api
 * @description
 * # qpiService
 * factory of the paintfusionApp
 */
angular.module('paintfusionApp')
.service('apiService',function($http) {

  this.getName= function(pseudo, server) {
    return $http.get("http://localhost/paintfusion/app/utils/api.php?action=userProfile&server="+server+"&pseudo="+pseudo).then(function (data){
        return data.data;
      });
    };
  this.getRunesPages = function(pseudo, server) {
    getName(pseudo,server)
    return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getRunesPages&server="+server+"&summonerId="+summonerId).then(function (data){
      return data.data;
    });
  };
});
