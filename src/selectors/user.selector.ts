import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const currentUserSelector = createSelector(
  (state: IRootState) => state.user,
  (user) => user.currentUser
)
