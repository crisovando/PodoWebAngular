'use strict';
import angular from 'angular';
import PacienteComponent from './dashboard.component';
import PacienteService from './paciente.service';


const dasboard = angular 
  .module('pacientes', [])
  .component('PacienteComponent',PacienteComponent)
  .service('pacienteService', PacienteService)
  .config(($stateProvider) => {
    $stateProvider
      .state('getPacientes', {
        url: '/getPacientes',
        component: 'PacienteComponent',
        resolve: {
          pacientes: PacienteService => PacienteService.getPacientes()
        }
      });
  })
  .name;

export default dasboard;