import { createAction, props } from '@ngrx/store';

export const addProductToCart = createAction('[Cart] Add product to cart', props<{ quantity: number }>());
