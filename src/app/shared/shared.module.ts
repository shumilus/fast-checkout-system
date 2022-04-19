import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './angular-material.module';
import { LoaderComponent, PersonalInfoComponent } from './components';

@NgModule({
  declarations: [
    PersonalInfoComponent,
    LoaderComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    AngularMaterialModule,
    PersonalInfoComponent,
    LoaderComponent,
  ]
})
export class SharedModule {
}
