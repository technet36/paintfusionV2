'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:sql
 * @description
 * # sqlService
 * service of the paintfusionApp
 */
angular.module('paintfusionApp')
  .service('sqlService',function($http, apiService,$q) {
var that = this;
    this.signup = function(pseudo, server, pass, mail) {
      var deferred = $q.defer();
      apiService.getProfileByPseudo(pseudo,server).then(function(data){
        var sumId = data.profil.id;
      return $http.get('http://localhost/paintfusion/app/utils/sql.php?action=signup&server='+server+'&pseudo='+pseudo+'&pass='+pass+'&sumId='+sumId+'&mail='+mail).then(function (data){
        data.data.code?deferred.reject(data.data):deferred.resolve(data.data);
        return deferred.promise;
      }),function(reason){
        deferred.reject(reason);
        return deferred.promise;
      }});
    };

    this.userExist = function(pseudo, server) {

      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=userExist&server="+server+"&pseudo="+pseudo).then(function (data){
        return {'code': data.data.code, 'msg':data.data.msg};
      });
    };

    this.login = function (pseudo, server, password ) {
      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=login&server="+server+"&pseudo="+pseudo+"&password="+password).then(function (data){
        //return
        console.log('datas :');
        console.log(data);
        console.log(data.data);
        return data.data;
      });
    };




  });

