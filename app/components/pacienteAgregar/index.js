'use strict';
import angular from 'angular';
import PacienteAgregarComponent from './pacienteAgregar.component';
import PacienteAgregarService from './pacienteAgregar.service';


const pacienteAgregar = angular 
  .module('pacienteAgregar', [])
  .component('pacienteAgregar', PacienteAgregarComponent)
  .service('PacienteAgregarService',PacienteAgregarService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('addPaciente', {
        url: '/addPaciente',
        component: 'pacienteAgregar'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default pacienteAgregar;
