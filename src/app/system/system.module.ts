import { NgModule } from '@angular/core';

import { SystemComponent } from './containers';
import { SystemRoutingModule } from './system-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    SystemRoutingModule,
    CoreModule,
  ],
  providers: [],
})
export class SystemModule {
}
