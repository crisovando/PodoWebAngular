import axios from 'axios';

class HistorialAgregarService {
  constructor(api) {
    this.urlApiHistorial = api.server + '/pacientes';
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