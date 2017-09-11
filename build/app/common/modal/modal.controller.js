class ModalController {
  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }
  $onChanges(changes) {
    if (changes.historial) {
      this.historial = Object.assign({}, this.historial);
    }
  }
  cancel() {
    this.$mdDialog.cancel();
  }
  onSubmit() {
    this.$mdDialog.hide(this.historial);
  }
}

ModalController.$inject = ['$mdDialog'];

export default ModalController;