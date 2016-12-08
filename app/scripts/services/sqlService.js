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
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=userExist&server="+server+"&pseudo="+pseudo).then(function(data){
        console.log(data);
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

    this.login = function (pseudo, server, password ){
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=login&server="+server+"&pseudo="+pseudo+"&password="+password).then(function(data){
        if(data.data.code)
          deferred.reject(data.data);
        else{
          deferred.resolve(data.data);
          console.log("data");
          console.log(data.data);
          var cookie = {
            'pseudo':data.data.pseudo,
            'matrix':data.data.matrix,
            'sumId':data.data.sumId,
            'privacyLvl':data.data.privacyLvl,
            'server':data.data.server,
            'userId':data.data.userId,
            'status':data.data.status
          };
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
    };

    this.getTournament = function (server, name) {
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=getTournament&server="+server+"&tournamentName="+name).then(function(data){
        data.data.code>=100?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    };

    this.getParticipants= function (idT) {
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=getParticipants&idTournament="+idT).then(function(data){
        data.data.code>=100?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    };

    this.addUserToTournament= function (idT,idUser,role1, role2) {
      var deferred = $q.defer();
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=addUserToTournament&idTournament="+idT+"&idUser="+idUser+"&role1="+role1+"&role2="+role2).then(function(data){
        data.data.code>=100?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      },function(reason){
        deferred.reject(reason);
        return deferred.promise;
      });
    };


  });
