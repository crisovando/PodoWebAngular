import angular from 'angular';

import { ContentComponent } from './content.component';

export const ContentModule = angular
  .module('content', [])
  .component('content', ContentComponent)
  .name;