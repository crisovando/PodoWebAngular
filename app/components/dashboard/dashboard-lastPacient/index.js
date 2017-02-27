'use strict';

import angular from 'angular';

import LastPacientComponent from './dashboard-lastPacient.component';

const DashboardLastPacient = angular  
  .module('lastPacient', [])
  .component('lastPacient', LastPacientComponent)
  .name;

export default DashboardLastPacient;