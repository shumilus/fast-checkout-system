import { createAction, props } from '@ngrx/store';

export const setLoading = createAction('[Loader] Set loader', props<{ loading: boolean }>());
