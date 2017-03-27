class PacienteService {
  constructor($resource) {
    this.$resource = $resource;
    this.urlApiPacientes = 'https://apipodologia.herokuapp.com/service/pacientes';
    this.urlApiPaciente = 'https://apipodologia.herokuapp.com/service/pacientes/:id';
    this.urlApiPacienteHistorial = 'https://apipodologia.herokuapp.com/service/pacientes/:id/historial';

    this.api = this.$resource(
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

PacienteService.$inject = ['$resource'];

export default PacienteService;