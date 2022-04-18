import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserCredential = firebase.auth.UserCredential;
import firebase from 'firebase';

import { FirebaseService } from '../../core/services';
import { UserCredentials } from '../../shared/models';

@Injectable()
export class AuthenticationService {

  constructor(private _firebaseService: FirebaseService) {
  }

  signUp(email: string, password: string): Promise<UserCredential> {
    return this._firebaseService.signUp(email, password);
  }

  signIn(credentials: UserCredentials): Promise<UserCredential> {
    return this._firebaseService.signIn(credentials);
  }

  signOut(): Promise<void> {
    return this._firebaseService.signOut();
  }

  isUserAuthenticated(): Observable<boolean> {
    return this._firebaseService.isUserAuthenticated();
  }
}
