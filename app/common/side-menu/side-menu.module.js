'use strict';

import angular from 'angular';

import { SideMenuComponent } from './side-menu.component';

export const SideMenuModule = angular  
  .module('sideMenu', [])
  .component('sideMenu', SideMenuComponent)
  .name;