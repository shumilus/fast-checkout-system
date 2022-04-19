import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutGuard } from './services/checkout.guard';
import { OrdersService, ProductService } from './services';
import {
  CheckoutComponent,
  ConfirmationComponent,
  HeaderComponent,
  MiniCartComponent,
  ProductComponent,
  SystemComponent,
} from './containers';

@NgModule({
  declarations: [
    SystemComponent,
    HeaderComponent,
    MiniCartComponent,
    ProductComponent,
    CheckoutComponent,
    ConfirmationComponent,
  ],
  imports: [
    SystemRoutingModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    CheckoutGuard,
    ProductService,
    OrdersService,
  ],
})
export class SystemModule {
}
