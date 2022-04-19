import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Product } from '../../shared/models';
import { products } from '../../shared/constants';
import { ApiService } from '../../core/services';

@Injectable()
export class ProductService {
  private _path = 'https://fast-checkout-system-default-rtdb.firebaseio.com/products.json';

  constructor(private _fireDatabase: AngularFireDatabase,
              private _api: ApiService) {
  }

  addProduct(product: Product): Observable<void> {
    return this._api.post(this._path, product);
  }

  getProducts(): Observable<Product[]> {
    return this._fireDatabase.list(products).valueChanges() as Observable<Product[]>;
  }
}
