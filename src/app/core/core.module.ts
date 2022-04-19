import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { FirebaseModule } from './modules';
import { AuthenticationModule } from '../authentication/authentication.module';
import { PageNotFoundComponent } from './components';
import { SystemModule } from '../system/system.module';
import { cartFeatureName, cartReducer } from './store/cart/cart.reducer';
import { userFeatureName, userReducer } from './store/user/user.reducer';
import { orderFeatureName, orderReducer } from './store/order/order.reducer';
import { loaderFeatureName, loaderReducer } from './store/loader/loader.reducer';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    SystemModule,
    AuthenticationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(cartFeatureName, cartReducer),
    StoreModule.forFeature(userFeatureName, userReducer),
    StoreModule.forFeature(orderFeatureName, orderReducer),
    StoreModule.forFeature(loaderFeatureName, loaderReducer),
  ],
  providers: [],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
