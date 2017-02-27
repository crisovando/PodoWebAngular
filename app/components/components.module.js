'use strict';

import angular from 'angular';

import speaker from './speaker';
import dashboard from './dashboard';
import pacienteAgregar from './pacienteAgregar';

export const ComponentsModule = angular  
  .module('app.components', [speaker, dashboard, pacienteAgregar])
  .name;