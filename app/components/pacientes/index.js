'use strict';

import angular from 'angular';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesDetailComponent } from './pacientes-detail/pacientes-detail.component';
import PacienteService from './paciente.service';


const pacientes = angular 
  .module('pacientes', [])
  .service('PacienteService', PacienteService)
  .component('pacientesList', PacientesListComponent)
  .component('pacienteDetail', PacientesDetailComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('listarPacientes', {
        url: '/listarPacientes',
        component: 'pacientesList',
        resolve: {
          listpacientes: PacienteService => PacienteService.getPacientes()
        }
      })
      .state('detailpaciente', {
        url: '/paciente/:id',
        component: 'pacienteDetail'
      });
  })
  .name;

export default pacientes;