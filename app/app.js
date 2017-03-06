'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularloadingbar from 'angular-loading-bar';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import toastr from 'angular-toastr';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

const root = angular  
  .module('angularCamp', [
    uiRouter,
    ngAnimate,
    ngAria,
    ngMaterial,
    toastr,
    CommonModule,
    ComponentsModule,
    angularloadingbar
  ])
  .component('acApp', AppComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['angularCamp']));

export default root;