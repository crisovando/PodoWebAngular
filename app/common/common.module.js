// /app/common/common.js
import angular from 'angular';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ContentModule } from './content/content.module';

export const CommonModule = angular  
  .module('app.common', [FooterModule, HeaderModule, ContentModule])
  .name;

 