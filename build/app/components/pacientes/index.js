'use strict';

import angular from 'angular';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import PacienteService from './paciente.service';


const pacientes = angular 
  .module('pacientes', [])
  .service('PacienteService', PacienteService)
  .component('pacientesList', PacientesListComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('listarPacientes', {
        url: '/listarPacientes',
        component: 'pacientesList',
        resolve: {
          listpacientes: PacienteService => PacienteService.getPacientes()
        }
      });
  })
  .name;

export default pacientes;