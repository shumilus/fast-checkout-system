import { createAction, props } from '@ngrx/store';
import { Order } from '../../../shared/models';

export const saveOrderToStore = createAction('[Order] Save order to store', props<Order>());
