import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HeaderComponent,
  MiniCartComponent,
  ProductComponent,
  SystemComponent,
} from './containers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SystemComponent,
    HeaderComponent,
    MiniCartComponent,
    ProductComponent,
  ],
  imports: [
    SystemRoutingModule,
    SharedModule,
    CommonModule,
  ],
  providers: [],
})
export class SystemModule {
}
