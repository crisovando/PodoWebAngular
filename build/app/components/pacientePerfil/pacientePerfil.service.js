import axios from 'axios';

class PacientePerfilService {
  constructor($resource, api) {
    this.$resource = $resource;
    this.urlApiPaciente = api.server + '/pacientes/:id';
    this.urlApiPacienteHistorial = api.server + '/pacientes';

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

  getHistorialMedico(idPaciente) {
    return new Promise((resolve, reject) =>{
      axios.get(`${this.urlApiPacienteHistorial}/${idPaciente}/historial`)
      .then(response => { 
        resolve(response.data);
      }).catch(err => reject(err));
    });
  }

  getPaciente(id) {
    return this.api.getPaciente({id: id});
  }
}

PacientePerfilService.$inject = ['$resource', 'api'];

export default PacientePerfilService;
