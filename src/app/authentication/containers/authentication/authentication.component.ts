import { ChangeDetectionStrategy, Component } from '@angular/core';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

import { AuthenticationService } from '../../services';
import { UserCredentials } from '../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {

  constructor(private _authService: AuthenticationService,
              private _router: Router) {
  }

  signUp(): void {
    this._authService.signUp('Zen@sayollo.com', '123456')
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        console.log('You are Successfully signed up!');
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  signIn(credentials: UserCredentials): void {
    this._authService.signIn(credentials)
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        console.log('You are in!');
        this._router.navigate(['/']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
}
