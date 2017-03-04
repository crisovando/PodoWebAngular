class PacientFormController {
  constructor(PacienteAgregarService) {
    this.pacienteAgregarService = PacienteAgregarService;
  }
  $onChanges(changes) {
    if (changes.paciente) {
      this.paciente = Object.assign({}, this.paciente);
    }
  }
  onSubmit() {
    debugger;
    if (!this.paciente.nombre || !this.paciente.apellido || !this.paciente.dni) return;

    this.pacienteAgregarService.addPaciente(this.paciente);

  }
}

PacientFormController.$inject = ['PacienteAgregarService'];

export default PacientFormController;