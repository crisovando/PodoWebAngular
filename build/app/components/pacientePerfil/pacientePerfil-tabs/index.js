'use strict';

import angular from 'angular';

import PacientePerfilTabsComponent from './pacientePerfil-tabs.component';
import PacientePerfilTabsTimelineComponent from './pacientePerfil-tabs-timeline/pacientePerfil-tabs-timeline.component';
import PacientePerfilTabsSettingComponent from './pacientePerfil-tabs-setting/pacientePerfil-tabs-setting.component';

const pacienteperfiltabs = angular  
  .module('pacienteperfiltabs', [])
  .component('podPerfilTabs', PacientePerfilTabsComponent)
  .component('podTimeline', PacientePerfilTabsTimelineComponent)
  .component('podSetting', PacientePerfilTabsSettingComponent)
  .name;

export default pacienteperfiltabs;