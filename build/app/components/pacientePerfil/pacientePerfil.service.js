class PacientePerfilService {
  constructor($resource) {
    this.$resource = $resource;
    this.urlApiPaciente = 'https://apipodologia.herokuapp.com/service/pacientes/:id';
    this.urlApiPacienteHistorial = 'https://apipodologia.herokuapp.com/service/pacientes/:id/historial';

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

PacientePerfilService.$inject = ['$resource'];

export default PacientePerfilService;
