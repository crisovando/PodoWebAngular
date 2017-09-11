import DialogController from './modal.controller';

export class ModalService {
  constructor($http, $mdDialog) {
    'ngInject';
    this.$http = $http;
    this.$mdDialog = $mdDialog;
  }
  show(dialog, callback) {
    this.$mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: dialog.parent,
      targetEvent: dialog.ev,
      clickOutsideToClose:true,
      fullscreen: false // Only for -xs, -sm breakpoints.
    })
    .then(callback);
  }
}