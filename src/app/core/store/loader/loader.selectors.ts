import { createFeatureSelector, createSelector } from '@ngrx/store';

import { loaderFeatureName, LoaderState } from './loader.reducer';

export const getLoaderState = createFeatureSelector<LoaderState>(loaderFeatureName);
export const getLoading = createSelector(getLoaderState, (state => state.loading));
