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

    this.getName= function(name, server) {

      return $http.get("http://localhost/paintfusion/app/utils/api.php?action=getName&server="+server+"&name="+name).then(function (data){
        return data.data;
      });
    };
});
