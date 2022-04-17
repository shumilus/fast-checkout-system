import { Injectable } from '@angular/core';
import UserCredential = firebase.auth.UserCredential;
import firebase from 'firebase';
import { FirebaseService } from '../../core/services';

@Injectable()
export class AuthenticationService {

  constructor(private _firebaseService: FirebaseService) {
  }

  signUp(email: string, password: string): Promise<UserCredential> {
    return this._firebaseService.signUp(email, password);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return this._firebaseService.signIn(email, password);
  }

  signOut(): Promise<void> {
    return this._firebaseService.signOut();
  }
}
