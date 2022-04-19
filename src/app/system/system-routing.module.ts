import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '../authentication/services';
import {
  CheckoutComponent,
  ConfirmationComponent,
  ProductComponent,
  SystemComponent
} from './containers';
import { CheckoutGuard } from './services/checkout.guard';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {path: '', component: ProductComponent},
      {path: 'checkout', component: CheckoutComponent, canActivate: [CheckoutGuard]},
      {path: 'confirmation', component: ConfirmationComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule],
})

export class SystemRoutingModule {

}
