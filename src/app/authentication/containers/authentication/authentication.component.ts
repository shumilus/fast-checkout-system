import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

import { AuthenticationService } from '../../services';
import { UserCredentials } from '../../../shared/models';
import { setLoading } from '../../../core/store/loader/loader.actions';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {

  constructor(private _authService: AuthenticationService,
              private _store: Store,
              private _router: Router) {
  }

  // TODO can be used on sign up page
  signUp(email: string, password: string): void {
    this._authService.signUp(email, password)
      .then()
      .catch(error => console.log('Something is wrong:', error.message));
  }

  signIn(credentials: UserCredentials): void {
    this._store.dispatch(setLoading({loading: true}));

    this._authService.signIn(credentials)
      .then((userCredential: UserCredential) => {
        return this._router.navigate(['/']);
      })
      .then(() => {
        this._store.dispatch(setLoading({loading: false}));
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
}
