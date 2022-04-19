import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartFeatureName, CartState } from './cart.reducer';

export const getCartState = createFeatureSelector<CartState>(cartFeatureName);

export const getProductQuantity = createSelector(getCartState, (state => state.quantity));
