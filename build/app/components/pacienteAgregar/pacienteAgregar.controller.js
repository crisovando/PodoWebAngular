import angular from 'angular';

class PacientFormController {
  constructor(PacienteAgregarService, toastr) {
    this.pacienteAgregarService = PacienteAgregarService;
    this.toastr = toastr;
  }
  $onChanges(changes) {
    angular.element('.datepicker').datepicker({
      autoclose: true,
      format: 'dd/mm/yyyy',
      language: 'es'
    });
    if (changes.paciente) {
      this.paciente = Object.assign({}, this.paciente);
    }
  }
  onSubmit() {
    if (!this.paciente.nombre || !this.paciente.apellido || !this.paciente.dni) return;
    this.pacienteAgregarService
      .addPaciente(this.paciente)
      .then(()=>{
        this.toastr.success('termino joya', 'Paciente');
      })
      .catch((err) =>{
        console.log(err);
        this.toastr.error(err);
      });
  }
}

PacientFormController.$inject = ['PacienteAgregarService','toastr'];

export default PacientFormController;