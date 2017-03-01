'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

const root = angular  
  .module('angularCamp', [
    uiRouter,
    CommonModule,
    ComponentsModule,
  ])
  .component('acApp', AppComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['angularCamp']));

export default root;