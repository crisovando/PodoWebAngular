class PacienteAgregarService {
  constructor($resource, api) {
    this.urlApiPacientes = api.server + '/pacientes';

    this.PacienteApi = $resource(this.urlApiPacientes, {}, {
      charge: {
        method: 'POST',
        params: {
          charge: true
        }
      }
    });
  }

  addPaciente(paciente) {
    let api = new this.PacienteApi(paciente);
    //api.nombre = paciente.nombre;

    return new Promise((resolve, reject) => {
      api.$save();
      console.log(api);
      resolve();
    });
  }
}

PacienteAgregarService.$inject = ['$resource', 'api'];

export default PacienteAgregarService;
