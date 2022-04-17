import { ChangeDetectionStrategy, Component } from '@angular/core';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {

  constructor(private _authService: AuthenticationService) {
  }

  signUp(): void {
    this._authService.signUp('', '')
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        console.log('You are Successfully signed up!');
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  signIn(): void {
    this._authService.signIn('', '')
      .then((userCredential: UserCredential) => {
        console.log(userCredential);
        console.log('You are in!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  signOut(): void {
    this._authService.signOut()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  addProduct(): void {

  }

  getProducts(): void {

  }
}
