'use strict';

<<<<<<< HEAD
// /app/common/contentwrapper/contentwrapper.component.js
export const ContentComponent = {  
  template: `
    <div class="content-wrapper" style="min-height: 916px;">
      <section class="content-header">
        <h1>
          Dashboard
          <small>Version 2.0</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
      <section class="content">
        <div ui-view></div>    
      </section>
    </div>
=======
export const ContentComponent = {  
  template: `
    <div class="content-wrapper" style="min-height: 916px;">
    <section class="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>
    <section class="content">
      <div ui-view></div>    
    </section>
  </div>
>>>>>>> 11101aef433ed96f70b79d6dd13641be713bbfad
  `
};