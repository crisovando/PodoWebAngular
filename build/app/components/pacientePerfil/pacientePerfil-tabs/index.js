'use strict';

import angular from 'angular';

import PacientePerfilTabsComponent from './pacientePerfil-tabs.component';
import PacientePerfilTabsTimelineComponent from './pacientePerfil-tabs-timeline/pacientePerfil-tabs-timeline.component';
import PacientePerfilTabsTimelineAgregarComponent from './pacientePerfil-tabs-timeline/pacientePerfil-tabs-timeline-agregar/pacientePerfil-tabs-timeline-agregar.component';
import PacientePerfilTabsSettingComponent from './pacientePerfil-tabs-setting/pacientePerfil-tabs-setting.component';
import HistorialAgregarService from './pacientePerfil-tabs-timeline/pacientePerfil-tabs-timeline.service';

const pacienteperfiltabs = angular  
  .module('pacienteperfiltabs', [])
  .service('HistorialAgregarService', HistorialAgregarService)
  .component('podPerfilTabs', PacientePerfilTabsComponent)
  .component('podTimeline', PacientePerfilTabsTimelineComponent)
  .component('podSetting', PacientePerfilTabsSettingComponent)
  .component('podTimelineAgregar', PacientePerfilTabsTimelineAgregarComponent)
  .name;

export default pacienteperfiltabs;