// /app/common/common.js
import angular from 'angular';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ContentModule } from './content/content.module';
<<<<<<< HEAD

export const CommonModule = angular  
  .module('app.common', [FooterModule, HeaderModule, ContentModule])
  .name;

 
=======
import { SideMenuModule } from './side-menu/side-menu.module';

export const CommonModule = angular  
  .module('app.common', [HeaderModule, FooterModule, ContentModule, SideMenuModule])
  .name;
>>>>>>> 11101aef433ed96f70b79d6dd13641be713bbfad
