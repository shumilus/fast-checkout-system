import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseModule } from './modules';
import { AuthenticationModule } from '../authentication/authentication.module';
import { PageNotFoundComponent } from './components';
import { SystemModule } from '../system/system.module';
import { ProductService } from '../system/services';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    SystemModule,
    AuthenticationModule,
  ],
  providers: [ProductService],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
