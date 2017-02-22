// /app/common/common.js
import angular from 'angular'

import { HeaderComponent } from './header/header.component'  
import { FooterComponent } from './footer/footer.component'
import { ContentWrapperComponent } from './contentwrapper/contentwrapper.component'

const common = angular  
  .module('app.common', [])
  .component('acHeader', HeaderComponent)
  .component('acFooter', FooterComponent)
  .component('acContent', ContentWrapperComponent)
  .name

export default common  