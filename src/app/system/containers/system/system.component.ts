import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import User = firebase.User;
import { Store } from '@ngrx/store';

import { saveUserToStore } from '../../../core/store/user/user.action';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemComponent implements OnInit {

  constructor(private _fireAuth: AngularFireAuth,
              private _store: Store) {
  }

  ngOnInit(): void {
    this._fireAuth.user.pipe(
      tap((user: User) => {
        this._store.dispatch(saveUserToStore({email: user.email}));
      }),
      take(1)
    )
      .subscribe();
  }
}
