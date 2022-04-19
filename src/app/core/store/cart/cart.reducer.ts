import { createReducer, on } from '@ngrx/store';

import { addProductToCart } from './cart.actions';

export const cartFeatureName = 'cart';

export interface CartState {
  quantity: number;
}

const initialCartState: CartState = {
  quantity: 0,
};

export const cartReducer = createReducer(
  initialCartState,
  on(addProductToCart, (state, {quantity}) => ({
    ...state,
    quantity,
  })),
);
