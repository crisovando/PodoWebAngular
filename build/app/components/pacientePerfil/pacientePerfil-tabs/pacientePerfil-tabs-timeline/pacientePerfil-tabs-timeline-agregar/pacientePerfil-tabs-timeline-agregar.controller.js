import angular from 'angular';

class PacientPerfilTimelineAgregarController {
  constructor(HistorialAgregarService, toastr) {
    this.HistorialAgregarService = HistorialAgregarService;
    this.toastr = toastr;
  }

  $onChanges(changes) {
    if (changes.notaClinica) {
      this.notaClinica = Object.assign({}, this.notaClinica);
    }
  }

  onSubmit() {
    if (!this.notaClinica.titulo || !this.notaClinica.observacion) return;
    this.HistorialAgregarService
      .addNotaClinica(this.paciente._id, this.notaClinica)
      .then(()=>{
        this.toastr.success('termino joya', 'Paciente');
        angular.element('#exampleModal').modal('hide');
      })
      .catch((err) =>{
        this.toastr.error(err);
      });
  }
}

PacientPerfilTimelineAgregarController.$inject = ['HistorialAgregarService', 'toastr'];

export default PacientPerfilTimelineAgregarController;