import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';

import { LocalStorageService } from '../../shared/services';
import { cart } from '../../shared/constants';

@Injectable()
export class CheckoutGuard implements CanActivate {

  constructor(private _store: Store,
              private _localStorageService: LocalStorageService,
              private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const cartData = JSON.parse(this._localStorageService.getItem(cart));
    return Boolean(cartData.quantity) || this._router.parseUrl('/');
  }
}
