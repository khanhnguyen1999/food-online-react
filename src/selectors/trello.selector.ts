import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const columnsSelector = createSelector(
  (state: IRootState) => state.trello,
  (trello) => trello.columns
)

export const listsSelector =  createSelector(
  (state: IRootState) => state.trello,
  (trello) => trello.lists
)

export const cardsSelectors =  createSelector(
  (state: IRootState) => state.trello,
  (trello) => trello.cards
)