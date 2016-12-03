'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:sql
 * @description
 * # sqlService
 * service of the paintfusionApp
 */
angular.module('paintfusionApp')
  .service('sqlService',function($http,$q,autreService, apiService) {
var that = this;
    this.signup = function(pseudo, server, pass, mail) {
      var deferred = $q.defer();
      return apiService.getProfileByPseudo(pseudo,server).then(function(data){
        var sumId = data.profil.id;
        return $http.get('http://localhost/paintfusion/app/utils/sql.php?action=signup&server='+server+'&pseudo='+pseudo+'&password='+pass+'&summonerId='+sumId+'&mail='+mail).then(function (data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
        },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      })},function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    };

    this.getUser = function(pseudo, server) {

      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=userExist&server="+server+"&pseudo="+pseudo).then(function (data){
        return {'code': data.data.code, 'msg':data.data.msg};
      });
    };

    this.login = function (pseudo, server, password ){
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=login&server="+server+"&pseudo="+pseudo+"&password="+password).then(function(data){
        if(data.data.code)
          deferred.reject(data.data);
        else{
          var cookie = {
            'pseudo':pseudo,
            'matrix':data.data.matrix,
            'sumId':data.data.sumId,
            'privacyLvl':data.data.privacyLvl,
            'server':server,
            'status':data.data.status
          };
          deferred.resolve(data.data);
          autreService.putMe(cookie);
        }

        return deferred.promise;
        },function(reason){
            deferred.reject(reason);
            return deferred.promise;
          });
    };

    this.createTournament = function (form) {
      var deferred = $q.defer();
      form.date = Date.parse(form.date);
      form.dateMax = Date.parse(form.dateMax);
      form.dateMin = Date.parse(form.dateMin);
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=createTournament&tournamentName="+form.name+"&privacyLvl="+form.privacyLvl+"&host="+form.host+"&server="+form.server+"&tournamentType="+form.type+"&maxPlayer="+form.maxPlayer+"&map="+form.map+"&date="+form.date+"&registrationMaxDate="+form.dateMax+"&note="+form.description).then(function(data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    };

    this.searchTournament = function (server, sumId) {
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=searchTournament&server="+server+"&summonerId="+sumId).then(function(data){
        data.data.code>=100?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    }


  });
