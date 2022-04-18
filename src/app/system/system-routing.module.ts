import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemComponent } from './containers';
import { AuthenticationGuard } from '../authentication/services';

const systemRoutes: Routes = [
  {
    path: '', component: SystemComponent, canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule],
})

export class SystemRoutingModule {

}
