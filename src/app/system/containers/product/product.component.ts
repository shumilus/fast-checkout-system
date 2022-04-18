import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ProductService } from '../../services';
import { Product } from '../../../shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;

  productQuantity = 1;

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this._productService.getProducts().pipe(tap(res => console.log(res)));
  }

  addProductToCart(): void {

  }

  addQuantity(): void {
    this.productQuantity = this.productQuantity + 1;
  }

  deleteQuantity(): void {
    if (this.productQuantity === 0) {
      return;
    }
    this.productQuantity = this.productQuantity - 1;
  }
}
