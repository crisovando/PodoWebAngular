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

    return new Promise((resolve) => {
      api.$save();
      resolve();
    });
  }
}

PacienteAgregarService.$inject = ['$resource', 'api'];

export default PacienteAgregarService;
