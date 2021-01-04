import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const trelloDataSelector = createSelector(
  (state: IRootState) => state.trello,
  (trello) => trello.trelloData
)
