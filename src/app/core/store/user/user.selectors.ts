import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userFeatureName, UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>(userFeatureName);

export const selectUserEmail = createSelector(getUserState, (state => state.email));
