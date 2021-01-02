import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const setDialog = createSelector(
  (state: IRootState) => state.app,
  (app) => app.dialog
)

export const langSelector = createSelector(
  (state: IRootState) => state.app,
  (app) => app.isLanguage
)
