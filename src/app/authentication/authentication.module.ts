import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './containers';
import { SignInComponent } from './components';
import { AuthenticationGuard, AuthenticationService } from './services';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
  ],
})
export class AuthenticationModule {
}
