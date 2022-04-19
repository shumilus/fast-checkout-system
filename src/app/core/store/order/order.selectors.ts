import { createFeatureSelector } from '@ngrx/store';

import { orderFeatureName, OrderState } from './order.reducer';

export const getOrderState = createFeatureSelector<OrderState>(orderFeatureName);
