class PacientPerfilTimelineController {
  constructor(HistorialAgregarService) {
    this.HistorialAgregarService = HistorialAgregarService;
  }

  $postLink(){
    this.HistorialAgregarService
    .getHistorialMedico(this.paciente._id)
    .then((res)=> {
      this.historial = res;
    }).catch(err => this.toastr.error(err));
  }
}

PacientPerfilTimelineController.$inject = ['HistorialAgregarService'];

export default PacientPerfilTimelineController;