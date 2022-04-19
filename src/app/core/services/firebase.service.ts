import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
import User = firebase.User;
import UserCredential = firebase.auth.UserCredential;

import { UserCredentials } from '../../shared/models';

@Injectable()
export class FirebaseService {
  private _userData$: Observable<User>;

  constructor(private _fireAuth: AngularFireAuth,
              private _http: HttpClient) {
    this._userData$ = _fireAuth.authState;
  }

  signUp(email: string, password: string): Promise<UserCredential> {
    return this._fireAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn({email, password}: UserCredentials): Promise<UserCredential> {
    return this._fireAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this._fireAuth.signOut();
  }

  isUserAuthenticated(): Observable<boolean> {
    return this._userData$.pipe(map((user: User) => Boolean(user)));
  }
}
