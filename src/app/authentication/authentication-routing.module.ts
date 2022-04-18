import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './containers';

const AuthRoutes: Routes = [
  {path: '', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})

export class AuthenticationRoutingModule {
}
