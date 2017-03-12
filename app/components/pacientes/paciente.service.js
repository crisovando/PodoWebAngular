class PacienteService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  getPacientes() {

    let req = {
      method: 'GET',
      url: 'https://apipodologia.herokuapp.com/service/pacientes',
      headers: {
        'Accept': 'application/json'
      }
    };

    return this.$http(req).then(response => response.data);
  }
}

PacienteService.$inject = ['$q','$http'];

export default PacienteService;