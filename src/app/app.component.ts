import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getLoading } from './core/store/loader/loader.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private _store: Store) {
  }

  ngOnInit(): void {
    this.loading$ = this._store.select(getLoading);
  }
}
