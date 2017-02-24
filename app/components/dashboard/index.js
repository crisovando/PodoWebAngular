'use strict';

import angular from 'angular';

import { DashboardLastPacientComponent } from './dashboard-lastPacient/dashboard-lastPacient.component';

const dasboard = angular 
  .module('dashboards', [])
  .component('dashboardlastPacient', DashboardLastPacientComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboards', {
        url: '/',
        component: 'dashboardlastPacient'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default dasboard;