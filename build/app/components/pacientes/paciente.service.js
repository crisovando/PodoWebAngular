class PacienteService {
  constructor($resource, api) {
    this.urlApiPacientes = api.server + '/pacientes';
    this.urlApiPaciente = api.server + '/pacientes/:id';
    this.urlApiPacienteHistorial = api.server + '/pacientes/:id/historial';

    this.api = $resource(
      this.urlApiPacientes,
      {},
      {
        'getPacientes': {
          method: 'GET',
          isArray: true
        }
      });
  }

  getPacientes() {
    return this.api.getPacientes();
  }
}

PacienteService.$inject = ['$resource', 'api'];

export default PacienteService;