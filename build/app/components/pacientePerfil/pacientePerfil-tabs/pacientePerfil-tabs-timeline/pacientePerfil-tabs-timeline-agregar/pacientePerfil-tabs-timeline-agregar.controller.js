import angular from 'angular';

class PacientPerfilTimelineAgregarController {
  constructor(TimelineService, toastr) {
    this.TimelineService = TimelineService;
    this.toastr = toastr;
  }

  $onChanges(changes) {
    if (changes.notaClinica) {
      this.notaClinica = Object.assign({}, this.notaClinica);
    }
  }

  onSubmit() {
    if (!this.notaClinica.titulo || !this.notaClinica.observacion) return;
    this.TimelineService
      .addNotaClinica(this.paciente._id, this.notaClinica)
      .then(()=>{
        angular.element('#exampleModal').modal('hide');
      })
      .catch((err) =>{
        this.toastr.error(err);
      });
  }
}

PacientPerfilTimelineAgregarController.$inject = ['TimelineService', 'toastr'];

export default PacientPerfilTimelineAgregarController;