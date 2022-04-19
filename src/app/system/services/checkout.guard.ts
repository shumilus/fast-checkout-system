import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { getProductQuantity } from '../../core/store/cart/cart.selectors';

@Injectable()
export class CheckoutGuard implements CanActivate {

  constructor(private _store: Store,
              private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._store.select(getProductQuantity)
      .pipe(
        map((quantity: number) => Boolean(quantity) || this._router.parseUrl('/'))
      );
  }
}
