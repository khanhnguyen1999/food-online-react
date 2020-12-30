import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const showNotify = createSelector(
  (state: IRootState) => state.notify,
  (notify) => notify
)
