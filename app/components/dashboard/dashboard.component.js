'use strict';

const DashboardComponent = {  
  bindings: {
    dashboard: '<'
  },
  template: `
    <div class="row">
      <div class="col-md-8">
        <last-pacient></last-pacient>
      </div>
      <div class="col-md-4">
      
      </div>
    </div>
  `
};

export default DashboardComponent;