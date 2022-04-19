import { createReducer, on } from '@ngrx/store';

import { UserCustom } from '../../../shared/models';
import { saveUserToStore } from './user.action';

export const userFeatureName = 'user';

export interface UserState {
  email: string;
}

const initialUserState: UserState = {
  email: undefined,
};

export const userReducer = createReducer(
  initialUserState,
  on(saveUserToStore, (state, user: UserCustom) => ({
    ...state,
    ...user
  })),
);
