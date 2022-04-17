import { NgModule } from '@angular/core';

import { SystemComponent } from './containers';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    SystemRoutingModule,
  ],
  providers: [],
})
export class SystemModule {
}
