const _addPaciente = paciente => {
  fetch('http://apipodologia.herokuapp.com/service/pacientes', {
    method: 'post',
    body: new FormData(paciente)
  })
    .then((response) => {
      if (response.ok)
        return response.json();
      else {
        return response.json()
          .then(function(err) {
            throw new Error('There\'s an error upstream and it says ' + err.message);
          });
      }
    })
    .then((paciente) => {
      return { paciente: paciente };
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
};

class PacientFormController {
  constructor(EventEmitter) {
    this.EventEmitter = EventEmitter;
  }
  $onChanges(changes) {
    if (changes.paciente) {
      this.paciente = Object.assign({}, this.paciente);
    }
  }
  onSubmit() {
    if (!this.paciente.nombre || !this.paciente.apellido || !this.paciente.dni) return;
    _addPaciente(this.paciente);
  }
}

PacientFormController.$inject = ['EventEmitter'];

export default PacientFormController;