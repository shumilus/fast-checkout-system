import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './containers';
import { SignInComponent } from './components';
import { AuthenticationGuard, AuthenticationService } from './services';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
  ],
})
export class AuthenticationModule {
}
