<<<<<<< HEAD
// /app/components/speaker/speaker-item/speaker-item.component.js

=======
>>>>>>> 11101aef433ed96f70b79d6dd13641be713bbfad
export const SpeakerItemComponent = {  
  bindings: {
    data: '<',
  },
  template: `
    <li class="collection-item avatar" style="border-bottom: 1px solid #cccccc;">
      <img class="circle" width="96px" ng-src="{{$ctrl.data.photo}}" alt="{{$ctrl.data.name}}" />
      <span class="title">{{$ctrl.data.name}}</span>
      <p><a ng-href="#/speakers/{{$ctrl.data.id}}">{{$ctrl.data.talk}}</a></p>
    </li>
  `
};