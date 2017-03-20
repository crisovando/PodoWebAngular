class PacienteAgregarService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  addPaciente( paciente ) {
    var defered = this.$q.defer();
    var promise = defered.promise;

    let req = {
      method: 'POST',
      url: 'https://apipodologia.herokuapp.com/service/pacientes',
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(paciente)
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

PacienteAgregarService.$inject = ['$q','$http'];

export default PacienteAgregarService;