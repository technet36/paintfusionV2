'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:sql
 * @description
 * # sqlService
 * service of the paintfusionApp
 */
angular.module('paintfusionApp')
  .service('sqlService',function($http,$q,$cookies, apiService) {
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
          deferred.resolve(data.data);
          $cookies.put('me',data.data);
        }

        return deferred.promise;
        },function(reason){
            deferred.reject(reason);
            return deferred.promise;
          });
    };


  });
