class PacienteService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  getPacientes() {
    var defered = this.$q.defer();
    var promise = defered.promise;

    let req = {
      method: 'GET',
      url: 'https://apipodologia.herokuapp.com/service/pacientes',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    this.$http(req)
        .then(function(data) {
          defered.resolve(data);
        },function(err) {
          defered.reject(err);
        });

    return promise;
  }
}

PacienteService.$inject = ['$q','$http'];

export default PacienteService;