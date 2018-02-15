'use strict';

import templateUrl from './dashboard.html';
import controller from './dashboard.controller';

const DashboardComponent = {  
  bindings: {
    dashboard: '<'
  },
  controller,
  templateUrl
};

export default DashboardComponent;