import { createReducer, on } from '@ngrx/store';

import { setLoading } from './loader.actions';

export const loaderFeatureName = 'loader';

export interface LoaderState {
  loading: boolean;
}

export const initialLoaderState: LoaderState = {
  loading: false,
};

export const loaderReducer = createReducer(
  initialLoaderState,

  on(setLoading, (state, {loading}) => ({
    ...state,
    loading
  }))
);
