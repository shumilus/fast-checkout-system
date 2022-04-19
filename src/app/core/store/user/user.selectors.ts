import { createFeatureSelector } from '@ngrx/store';

import { userFeatureName, UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>(userFeatureName);
