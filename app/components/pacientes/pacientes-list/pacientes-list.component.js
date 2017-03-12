import templateUrl from './pacientes-list.html';

/**
 * Stateless Component that defines a speakers list.
 * Stateless: - Data enters the component through attribute bindings (inputs)
 *            - Data leaves the component through events (outputs)
 */
export const PacientesListComponent = {
  bindings: {
    listpacientes: '<'
  },
  templateUrl
};