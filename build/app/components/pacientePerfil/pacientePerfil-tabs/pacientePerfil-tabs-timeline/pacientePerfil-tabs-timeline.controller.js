import angular from 'angular';
class PacientPerfilTimelineController {
  constructor(TimelineService, PacientePerfilService, toastr, $scope) {
    this.TimelineService = TimelineService;
    this.PacientePerfilService = PacientePerfilService;
    this.toastr = toastr;
    this.$scope= $scope;
  }

  openModal() {
    const self = this;
    angular.element('#exampleModal').modal('show');

    angular.element('#exampleModal').on('hidden.bs.modal', function () {
      self.PacientePerfilService.getHistorialMedico(self.paciente._id)
        .then(res => {
          self.$scope.$apply(() => {
            self.historial = res;
          });
        });
    });
  }

  eliminar(historialId) {
    const self = this;
    this.TimelineService
      .delNotaClinica(this.paciente._id, historialId)
      .then(()=>{
        self.$scope.$apply(() => {
          self.historial = self.historial.filter(h => h._id != historialId);
        });
      })
      .catch((err) =>{
        this.toastr.error(err);
      });
  }

  editar(nota, notaClinica) {
    const registro = Object.assign(notaClinica, nota);
    this.TimelineService
      .editNotaClinica(this.paciente._id, registro)
      .then(()=> {
        notaClinica = registro;
        notaClinica.viewEdicion = false;
      })
      .catch((err) =>{
        this.toastr.error(err);
      });
  }
}

PacientPerfilTimelineController.$inject = ['TimelineService', 'PacientePerfilService','toastr', '$scope'];

export default PacientPerfilTimelineController;