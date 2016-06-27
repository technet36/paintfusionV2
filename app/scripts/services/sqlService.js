'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.services:sql
 * @description
 * # sqlService
 * service of the paintfusionApp
 */
angular.module('paintfusionApp')
  .service('sqlService',function($http, apiService) {

    this.signup= function(pseudo, server, pass, mail) {
      var sumId;
      return apiService.getName(pseudo,server).then(function(name) {
          sumId = _.get(name,pseudo+'.id');
        return $http.get("http://localhost/paintfusion/app/utils/sql.php?action=signup&server="+server+"&pseudo="+pseudo+"&pass="+pass+"&sumId="+sumId+"&mail="+mail).then(function (data){
          return data;
        });
      });
    };

    this.userExist= function(pseudo, server) {

      return $http.get("http://localhost:80/paintfusion/app/utils/sql.php?action=userExist&server="+server+"&pseudo="+pseudo).then(function (data){
        return data.exist;
      });
    };





  });

