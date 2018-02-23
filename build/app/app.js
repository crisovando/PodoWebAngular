'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularloadingbar from 'angular-loading-bar';
import toastr from 'angular-toastr';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import config from '../../config/keys';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

const root = angular
  .module('angularCamp', [
    uiRouter,
    ngAnimate,
    ngResource,
    toastr,
    CommonModule,
    ComponentsModule,
    angularloadingbar
  ])
  .component('acApp', AppComponent)
  .constant('api', {
    server: config.apiURI
  });

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['angularCamp']));

export default root;