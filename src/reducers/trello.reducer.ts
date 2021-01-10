import { DRAG_END_CARD, DRAG_END_LIST } from 'actions/trello.action';

import { Action } from 'models/IRoute'
import { ITrelloState } from 'models/ITrello';

const initialState: ITrelloState = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'list 1',
      cards: ['card-1-1', 'card-1-2'],
    },
    'list-2': {
      id: 'list-2',
      title: 'list 2',
      cards: ['card-2-1', 'card-2-2'],
    },
  },
  cards: {
    'card-1-1': {
      id: 'card-1-1',
      list: 'list-1',
      title: 'learn javascriptlearn ',
    },
    'card-1-2': {
      id: 'card-1-2',
      list: 'list-1',
      title: 'learn react',
    },
    'card-2-1': {
      id: 'card-2-1',
      list: 'list-2',
      title: 'learn javascript',
    },
    'card-2-2': {
      id: 'card-2-2',
      list: 'list-2',
      title: 'learn graphQL',
    },
  },
  columns: ['list-1', 'list-2'],
};


export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case DRAG_END_LIST: {
      const { destination, source } = action.payload;
      if(destination === null) return;
      
      const newColumns = [...state.columns];
      const newPosition = newColumns.splice(source.index, 1)[0];
      newColumns.splice(destination.index, 0, newPosition);

      return {
        ...state,
        columns: newColumns
      }
    }
    default:
      return state;
  }
}