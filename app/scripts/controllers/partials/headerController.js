'use strict';

angular.module('paintfusionApp')
  .controller('HeaderCtrl', function ($scope, apiService, sqlService, autreService) {
    console.log("headerCtrl");
    console.log($scope.server,$scope.sumId)
  });
