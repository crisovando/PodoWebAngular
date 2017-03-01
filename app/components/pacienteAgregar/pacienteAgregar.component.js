'use strict';

//import pacienteTemplate from './pacienteAgregar.html'

const PacienteAgregarComponent = {  
  template: `
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Horizontal Form</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form name="addPacienteForm" ng-submit="$ctrl.onSubmit();" class="form-horizontal">
            <div class="box-body">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Nombre</label>

                <div class="col-sm-10">
                  <input ng-model="$ctrl.paciente.nombre" type="text" class="form-control" id="inputName3" placeholder="Nombre">
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>

                <div class="col-sm-10">
                  <input ng-model="$ctrl.paciente.email" type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>

                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <button type="submit" class="btn btn-default">Cancel</button>
              <button type="submit" class="btn btn-info pull-right">Guardar</button>
            </div>
            <!-- /.box-footer -->
          </form>
        </div>
      </div>
    </div>
  `
};

export default PacienteAgregarComponent;

