import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProductService } from '../../services';
import { Product } from '../../../shared/models';
import { addProductToCart } from '../../../core/store/cart/cart.actions';
import { getProductQuantity } from '../../../core/store/cart/cart.selectors';
import { LocalStorageService } from '../../../shared/services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;
  productQuantityInCart$: Observable<number>;

  counter = 0;

  constructor(private _productService: ProductService,
              private _localStorageService: LocalStorageService,
              private _router: Router,
              private _store: Store) {
  }

  ngOnInit(): void {
    this.products$ = this._productService.getProducts();
    this.productQuantityInCart$ = this._store.select(getProductQuantity);
  }

  onAddProductToCart(quantityInCart: number): void {
    const quantity = this.counter + quantityInCart;
    this._store.dispatch(addProductToCart({quantity}));
    this._localStorageService.setItem('cart', JSON.stringify({quantity}));

    this.counter = 0;
  }

  addQuantity(): void {
    this.counter = this.counter + 1;
  }

  deleteQuantity(): void {
    if (!this.counter) {
      return;
    }
    this.counter = this.counter - 1;
  }

  onCheckout(): void {
    this._router.navigate(['/checkout']);
  }
}
