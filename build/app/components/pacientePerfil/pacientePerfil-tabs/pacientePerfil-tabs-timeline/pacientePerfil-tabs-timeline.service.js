import axios from 'axios';

class HistorialAgregarService {
  constructor(api) {
    this.urlApi = api.server + '/pacientes';
  }

  addNotaClinica(idPaciente, notaClinica) {
    return new Promise((resolve, reject) =>{
      axios.post(`${this.urlApi}/${idPaciente}/historial`, notaClinica)
      .then(response => { 
        resolve(response);
      }).catch(err => reject(err));
    });
  }

  delNotaClinica(idPaciente, idHistorial) {
    return new Promise((resolve, reject) =>{
      axios.delete(`${this.urlApi}/${idPaciente}/historial/${idHistorial}`)
      .then(response => { 
        resolve(response);
      }).catch(err => reject(err));
    });
  }

  editNotaClinica(idPaciente, notaClinica) {
    return new Promise((resolve, reject) =>{
      axios.patch(`${this.urlApi}/${idPaciente}/historial/${notaClinica._id}`, notaClinica)
      .then(response => { 
        resolve(response);
      }).catch(err => reject(err));
    });
  }
}

HistorialAgregarService.$inject = ['api'];

export default HistorialAgregarService;