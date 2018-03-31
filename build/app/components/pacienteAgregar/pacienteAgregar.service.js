import axios from 'axios';

class PacienteAgregarService {
  constructor($resource, api) {
    this.urlApiPacientes = api.server + '/pacientes';
  }

  async addPaciente(paciente) {
    let res = await axios.post(this.urlApiPacientes, paciente);
    return res.data;
  }
}

PacienteAgregarService.$inject = ['$resource', 'api'];

export default PacienteAgregarService;
