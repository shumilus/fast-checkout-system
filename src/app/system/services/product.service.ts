import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../shared/models';

@Injectable()
export class ProductService {

  constructor(private _fireDatabase: AngularFireDatabase,
              private _http: HttpClient) {
  }

  addProduct(): void {
    this._http.post('https://fast-checkout-system-default-rtdb.firebaseio.com/products.json',
      {
        id: '1',
        name: 'Product name',
        path: './assets/images/products/game-product.png',
        description: 'Short Description Short Description Short\n' +
          '    Description Short Description Short Description',
        price: 40,
      }
    ).subscribe((res) => console.log(res));
  }

  getProducts(): Observable<Product[]> {
    return this._fireDatabase.list('products').valueChanges() as Observable<Product[]>;
  }
}
