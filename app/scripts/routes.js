'use strict';

/**
 * @ngdoc object
 * @name paintfusionApp.routes
 * @description
 * # routes
 * All routes and states in the paintfusion application.
 */
angular.module('paintfusionApp')
  .directive('history', function() {
    return {
      restrict: 'E',
      scope: {
        sumId: '=sumId',
        server: '=server'
      },
      controller:'HistoryCtrl',
      templateUrl:'views/partials/historyDirective.html'
    }
  })
  .directive('matrix', function() {
    return {
      restrict: 'E',
      scope: {
        sumId: '=sumId',
        server: '=server'
      },
      controller:'MatrixCtrl',
      templateUrl:'views/partials/matrixDirective.html'
    }
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('dashboard',{
        url:'/dashboard/:server/:pseudo',
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
      .state('tournamentCreator',{
        url:'/tournament',
        title: 'Paintfusion: tournament',
        templateUrl: 'views/tournament_creator.html',
        controller: 'TournamentCreatorCtrl'
        })
      .state('history',{
        templateUrl: 'views/tournament_creator.html',
        controller: 'TournamentCreatorCtrl'
      })

  });
