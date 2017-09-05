class PacientePerfilService {
  constructor($resource, api) {
    this.$resource = $resource;
    this.urlApiPaciente = api + '/pacientes/:id';
    this.urlApiPacienteHistorial = api + '/pacientes/:id/historial';

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
