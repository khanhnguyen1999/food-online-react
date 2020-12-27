import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const accessTokenSelector = createSelector(
  (state: IRootState) => state.auth,
  (auth) => auth.ACCESS_TOKEN
)
