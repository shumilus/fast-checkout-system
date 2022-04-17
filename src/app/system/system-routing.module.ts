import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './containers';

const systemRoutes: Routes = [
  {
    path: '', component: SystemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule],
})

export class SystemRoutingModule {

}
