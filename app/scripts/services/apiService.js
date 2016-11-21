'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:api
 * @description
 * # qpiService
 * factory of the paintfusionApp
 */
angular.module('paintfusionApp')
  .service('apiService',function($http,$q) {
  var that = this;
//##############################
//api request
// #############################
  this.getProfile= function(summonerId, server) {
    var deferred = $q.defer();
    return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getProfile&server="+server+"&summonerId="+summonerId).then(function (data){
      data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
      return deferred.promise;
    });
  };

    this.getLeague = function (summonerId,server){
      var deferred = $q.defer();
      return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getLeague&server="+server+"&summonerId="+summonerId).then(function (data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      });
    };
    this.getHistorique = function (summonerId,server){
      var deferred = $q.defer();
      return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getHistorique&server="+server+"&summonerId="+summonerId).then(function (data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      });
    };
  this.getProfileByPseudo= function (pseudo, server){
    var deferred = $q.defer();
    return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getProfileByPseudo&server="+server+"&pseudo="+pseudo).then(function (data){
      data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
      return deferred.promise;
    });
  };
  this.getRunesPages = function(summonerId, server) {
    var deferred = $q.defer();
    return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getRunesPages&server="+server+"&summonerId="+summonerId).then(function (data){
      data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
      return deferred.promise;
    });
  };
    this.getStats = function(matchId, server){
      var deferred = $q.defer();
      return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getStats&server="+server+"&idMatch="+matchId).then(function (data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      });
    };
//##############################

  this.isRunesPagesOk = function (pseudo, server) {
    var deferred = $q.defer();
    return that.getProfileByPseudo(pseudo, server).then(function(data){
      var summonerId = data.profil.id;
      return that.getRunesPages(summonerId, server).then(function (pagesList) {
        pagesList = pagesList.pages;
        _.find(pagesList, function(o) {return _.toLower(o.name)=="paintfusion";})?deferred.resolve():deferred.reject({"msg":"No page named paintfusion","code":101});
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
      },function (reason){
        deferred.reject(reason);
        return deferred.promise;
      });
  };


});
