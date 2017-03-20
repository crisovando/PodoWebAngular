'use strict';

import angular from 'angular';

import DashboardComponent from './dashboard.component';
//import DashBoardService from './dashboard.service';
import DashboardLastPacient from './dashboard-lastPacient';

const dashboard = angular 
  .module('dashboard', [DashboardLastPacient])
  .component('dashboard', DashboardComponent)
  //.service('dashboardService', DashboardService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboard'
        // ncyBreadcrumb: {
        //   label: 'Home'
        // }
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default dashboard;