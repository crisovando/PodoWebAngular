'use strict';

import angular from 'angular';

import PacientePerfilComponent from './pacientePerfil.component';
import PacientePerfilProfileComponent from './pacientePerfil-profile/pacientePerfil-profile.component';
import PacientePerfilAboutMeComponent from './pacientePerfil-aboutme/pacientePerfil-aboutme.component';
import PacientePerfilTabs from './pacientePerfil-tabs';
import PacientePerfilService from './pacientePerfil.service';

const perfilpaciente = angular 
  .module('perfilpaciente', [ PacientePerfilTabs ])
  .service('PacientePerfilService', PacientePerfilService)
  .component('pacientePerfil', PacientePerfilComponent)
  .component('podBoxprofile',PacientePerfilProfileComponent)
  .component('podBoxaboutme',PacientePerfilAboutMeComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('perfilpaciente', {
        url: '/perfilpaciente/:id',
        component: 'pacientePerfil',
        resolve: {
          paciente: (PacientePerfilService, $stateParams) => PacientePerfilService.getPaciente($stateParams.id)
        }
      });
  })
  .name;

export default perfilpaciente;