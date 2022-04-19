import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getProductQuantity } from '../../../core/store/cart/cart.selectors';
import { addProductToCart } from '../../../core/store/cart/cart.actions';
import { LocalStorageService } from '../../../shared/services';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniCartComponent implements OnInit {
  quantity$: Observable<number>;

  constructor(private _store: Store,
              private _localStorageService: LocalStorageService) {
  }

  private _getCartFromLocalStorage(): void {
    const cart = JSON.parse(this._localStorageService.getItem('cart'));
    this._store.dispatch(addProductToCart({quantity: cart ? cart.quantity : 0}));
  }

  ngOnInit(): void {
    this.quantity$ = this._store.select(getProductQuantity);

    this._getCartFromLocalStorage();
  }

}
