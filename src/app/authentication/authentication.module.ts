import { NgModule } from '@angular/core';

import { AuthenticationComponent } from './containers';
import { SignInComponent } from './components';
import { AuthenticationService } from './services';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
  ],
  providers: [AuthenticationService],
})
export class AuthenticationModule {
}
