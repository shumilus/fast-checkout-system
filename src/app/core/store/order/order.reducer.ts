import { createReducer, on } from '@ngrx/store';

import { Order, PersonalInfo } from '../../../shared/models';
import { saveOrderToStore } from './order.action';

export const orderFeatureName = 'order';

export interface OrderState {
  id: number;
  personalInformation: PersonalInfo;
  quantity: number;
}

const initialOrderState: OrderState = {
  id: undefined,
  personalInformation: undefined,
  quantity: undefined,
};

export const orderReducer = createReducer(
  initialOrderState,
  on(saveOrderToStore, (state, order: Order) => ({
      ...state,
      ...order
    })
  ),
);
