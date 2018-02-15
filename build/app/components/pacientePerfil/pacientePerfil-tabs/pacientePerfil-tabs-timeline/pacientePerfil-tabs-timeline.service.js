import axios from 'axios';

class HistorialAgregarService {
  constructor(api) {
    this.urlApiHistorial = api.server + '/pacientes';
  }

  getHistorialMedico(idPaciente) {
    return new Promise((resolve, reject) =>{
      axios.get(`${this.urlApiHistorial}/${idPaciente}/historial`)
      .then(response => { 
        resolve(response.data);
      }).catch(err => reject(err));
    });
  }

  addNotaClinica(idPaciente, notaClinica) {
    return new Promise((resolve, reject) =>{
      axios.post(`${this.urlApiHistorial}/${idPaciente}/historial`, notaClinica)
      .then(response => { 
        resolve(response);
      }).catch(err => reject(err));
    });
  }
}

HistorialAgregarService.$inject = ['api'];

export default HistorialAgregarService;