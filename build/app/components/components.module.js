'use strict';

import angular from 'angular';

import speaker from './speaker';
import dashboard from './dashboard';
import pacienteAgregar from './pacienteAgregar';
import pacientes from './pacientes';
import perfilpaciente from './pacientePerfil';

export const ComponentsModule = angular  
  .module('app.components', [speaker, dashboard, pacienteAgregar, pacientes, perfilpaciente])
  .name;