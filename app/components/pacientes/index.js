'use strict';
import angular from 'angular';

//import PacienteComponent from './dashboard.component';
//import DashBoardService from './dashboard.service';


const dasboard = angular 
  .module('dashboard', [])
  //.service('dashboardService', DashboardService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/getPacientes',
        component: 'dashboard',
        // resolve: {
        //   dashboardData: DashboardService => DashboardService.getData()
        // }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default dasboard;