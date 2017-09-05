'use strict';

import angular from 'angular';

import dashboard from './dashboard';
import pacienteAgregar from './pacienteAgregar';
import pacientes from './pacientes';
import perfilpaciente from './pacientePerfil';

export const ComponentsModule = angular  
  .module('app.components', [dashboard, pacienteAgregar, pacientes, perfilpaciente])
  .name;