import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
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
              private _http: HttpClient,
              private _fireDatabase: AngularFireDatabase) {
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

  addProduct(): void {
    this._http.post('https://fast-checkout-system-default-rtdb.firebaseio.com/products.json', {
      name: 'test2'
    }).subscribe((res) => console.log(res));
  }

  getProducts(): void {
    this._fireDatabase.list('products').valueChanges().subscribe(res => console.log(res));
  }

  isUserAuthenticated(): Observable<boolean>{
    return this._userData$.pipe(map((user: User) => Boolean(user)));
  }
}
