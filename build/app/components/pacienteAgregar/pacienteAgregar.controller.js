class PacientFormController {
  constructor(PacienteAgregarService, toastr) {
    this.pacienteAgregarService = PacienteAgregarService;
    this.toastr = toastr;
  }
  $onChanges(changes) {
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