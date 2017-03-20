'use strict';

import angular from 'angular';

import PacientePerfilComponent from './pacientePerfil.component';
import PacientePerfilProfileComponent from './pacientePerfil-profile/pacientePerfil-profile.component';
import PacientePerfilAboutMeComponent from './pacientePerfil-aboutme/pacientePerfil-aboutme.component';
import PacientePerfilTabs from './pacientePerfil-tabs';

const perfilpaciente = angular 
  .module('perfilpaciente', [ PacientePerfilTabs ])
  .component('pacientePerfil', PacientePerfilComponent)
  .component('podBoxprofile',PacientePerfilProfileComponent)
  .component('podBoxaboutme',PacientePerfilAboutMeComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('perfilpaciente', {
        url: '/perfilpaciente/:id',
        component: 'pacientePerfil'
        
      });
  })
  .name;

export default perfilpaciente;