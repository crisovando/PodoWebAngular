// /app/components/components.js
'use strict';

import angular from 'angular'

import speaker from './speaker'
import dashboard from './dashboard'

const components = angular  
  .module('app.components', [speaker, dashboard])
  .name

export default components 