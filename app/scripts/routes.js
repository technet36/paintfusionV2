'use strict';

/**
 * @ngdoc object
 * @name paintfusionApp.routes
 * @description
 * # routes
 * All routes and states in the paintfusion application.
 */
angular.module('paintfusionApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

      .state('dashboard',{
        url:'/dashboard',
        title: 'Paintfusion: dashboard',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
      .state('login',{
        url:'/login',
        title: 'Paintfusion: login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
        })
  });
