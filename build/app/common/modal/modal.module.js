'use strict';

import angular from 'angular';
import { ModalComponent } from './modal.component';
import ModalService from './modal.service';

export const ModalModule = angular  
  .module('modal', [])
  .service('ModalService', ModalService)
  .component('modal', ModalComponent)
  .name;