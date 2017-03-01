'use strict';
import angular from 'angular';
import PacienteAgregarComponent from './pacienteAgregar.component'; 


const pacienteAgregar = angular 
  .module('pacienteAgregar', [])
  .component('pacienteAgregar', PacienteAgregarComponent)
  .value('EventEmitter', payload => ({ $event: payload}))
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
