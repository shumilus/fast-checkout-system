import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { ApiService } from '../../core/services';
import { Order } from '../../shared/models';
import { orders } from '../../shared/constants';

@Injectable()
export class OrdersService {
  private _path = 'https://fast-checkout-system-default-rtdb.firebaseio.com/orders.json';

  constructor(private _apiService: ApiService, private _fireDatabase: AngularFireDatabase) {
  }

  saveOrder(order: string): Observable<void> {
    return this._apiService.post(this._path, order);
  }

  getOrders(): Observable<Order[]> {
    return this._fireDatabase.list(orders).valueChanges() as Observable<Order[]>;
  }
}
