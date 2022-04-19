import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getOrderState } from '../../../core/store/order/order.selectors';
import { OrdersService } from '../../services';
import { saveOrderToStore } from '../../../core/store/order/order.action';
import { Order } from '../../../shared/models';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationComponent implements OnInit {
  order$: Observable<Order>;

  constructor(private _store: Store,
              private _orderService: OrdersService) {
  }

  ngOnInit(): void {
    this._orderService.getOrders()
      .pipe(
        map((orders: Order[]) => {
          return orders[orders.length - 1]
        }),
      )
      .subscribe((order: Order) => {
        this._store.dispatch(saveOrderToStore(order));
      });

    this.order$ = this._store.select(getOrderState);
  }
}
