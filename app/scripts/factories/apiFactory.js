'use strict';

/**
 * @ngdoc function
 * @name paintfusionApp.factories:api
 * @description
 * # apiFactory
 * factory of the paintfusionApp
 */
angular.module('paintfusionApp')
.factory('apiFactory',function($http) {
  return{
    getName: function(name, server) {

      var test = $http.get("http://localhost/paintfusion/app/utils/api.php?action=getName&server="+server+"&name="+name).then(function (data){
        console.log('data');
        console.log(data);
        return data;
      });
      console.log('test');
      console.log(test);

      return test;
    }
  }
});
