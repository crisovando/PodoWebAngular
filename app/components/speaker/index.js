'use strict';

import angular from 'angular';
import { SpeakerItemComponent } from './speaker-item/speaker-item.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component'; 
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import SpeakerService from './speaker.service';

const speaker = angular  
  .module('speakers', [])
  .service('SpeakerService', SpeakerService)
  .component('speakerItem', SpeakerItemComponent)
  .component('speakerList', SpeakerListComponent)
  .component('speakerDetail', SpeakerDetailComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('speakers', {
        url: '/speakers',
        component: 'speakerList',
        resolve: {
          speakers: SpeakerService => SpeakerService.getSpeakers()
        }
      })
      .state('speaker', {
        url: '/speakers/:id',
        component: 'speakerDetail',
        resolve: {
          speaker: (SpeakerService, $stateParams) => SpeakerService.getSpeaker($stateParams.id)
        }
      });
  })
  .name;

export default speaker;