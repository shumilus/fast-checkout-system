import { createAction, props } from '@ngrx/store';
import { UserCustom } from '../../../shared/models';

export const saveUserToStore = createAction('[User] Save user to store', props<UserCustom>());
