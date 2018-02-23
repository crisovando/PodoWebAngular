import templateUrl from './pacientePerfil-tabs-timeline.html';
import controller from './pacientePerfil-tabs-timeline.controller';

const PacientePerfilTabsTimelineComponent = {
  bindings: {
    paciente: '<',
    historial: '<'
  },
  templateUrl,
  controller
};

export default PacientePerfilTabsTimelineComponent;