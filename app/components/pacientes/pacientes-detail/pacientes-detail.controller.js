class PacienteDetailController {
  constructor(PacienteService, toastr) {
    this.pacienteAgregarService = PacienteService;
    this.toastr = toastr;
  }
  $onChanges(changes) {
    if (changes.paciente) {
      this.paciente = Object.assign({}, this.paciente);
    }
  }
  onSubmit() {
    if (!this.paciente.nombre || !this.paciente.apellido || !this.paciente.dni) return;
    this.pacienteService
      .addPaciente(this.paciente)
      .then(()=>{
        this.toastr.success('termino joya', 'Paciente');
      })
      .catch((err) =>{
        this.toastr.error(err);
      });
  }
}

PacienteDetailController.$inject = ['PacienteService','toastr'];

export default PacienteDetailController;