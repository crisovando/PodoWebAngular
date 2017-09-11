class PacientePerfilService {
  constructor($resource, api) {
    this.$resource = $resource;
    this.urlApiPaciente = api.server + '/pacientes/:id';
    this.urlApiPacienteHistorial = api.server + '/pacientes/:id/historial';

    this.api = this.$resource(
      this.urlApiPaciente,
      {},
      {
        'getPaciente': {
          method: 'GET',
          isArray: false
        }
      });
  }

  getPaciente(id) {
    return this.api.getPaciente({id: id});
  }
}

PacientePerfilService.$inject = ['$resource', 'api'];

export default PacientePerfilService;
