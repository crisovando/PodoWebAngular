'use strict';

import angular from 'angular';
import { FooterComponent } from './footer.component';

export const FooterModule = angular  
  .module('footer', [])
  .component('footer', FooterComponent)
  .name;