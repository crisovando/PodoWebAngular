import angular from 'angular';

class PacientPerfilTimelineController {
  constructor(ModalService) {
    this.ModalService = ModalService;
  }

  showModal(ev) {
    const submit = (objeto) => {
      console.log(objeto);
    };
    console.log('objeto');
    this.ModalService.show({
      parent: angular.element(document.body),
      targetEvent: ev
    },submit);
  }
}

PacientPerfilTimelineController.$inject = ['ModalService'];

export default PacientPerfilTimelineController;