
class ModalService {
  constructor($http, $mdDialog) {
    this.$http = $http;
    this.$mdDialog = $mdDialog;
  }
}

ModalService.$inject = ['$http'];

export default ModalService;