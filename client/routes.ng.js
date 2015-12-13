angular.module("socially").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider

    .state('createFile', {
      url: '/createFile',
      templateUrl: 'client/createFile/views/createFile.ng.html',
      controller: 'createFileCtrl'
    })
    .state('updateData', {
      url: '/updateData',
      templateUrl: 'client/clientData/views/update-data.ng.html',
      controller: 'GettingStartedCtrl',
      controllerAs : 'start'
    });

  $urlRouterProvider.otherwise("/updateData");
});