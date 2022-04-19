import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './angular-material.module';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    AngularMaterialModule,
    PersonalInfoComponent,
  ]
})
export class SharedModule {
}
