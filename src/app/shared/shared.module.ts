import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
  ],
  providers: [],
  exports: [
    AngularMaterialModule,
  ]
})
export class SharedModule {
}
