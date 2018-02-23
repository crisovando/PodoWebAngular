class PacientPerfilTimelineController {
  constructor(HistorialAgregarService) {
    this.HistorialAgregarService = HistorialAgregarService;
  }

  $onInit(){
    
  }
}

PacientPerfilTimelineController.$inject = ['HistorialAgregarService'];

export default PacientPerfilTimelineController;