import { DRAG_END_CARD, DRAG_END_LIST, CHANGE_TITLE_CARD, ADD_CARD,ADD_LIST } from 'actions/trello.action';

import { Action } from 'models/IRoute'
import { ITrelloState } from 'models/ITrello';

const initialState: ITrelloState = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'list 1',
      cards: ['card-1-1', 'card-1-2', 'card-1-3'],
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
    'card-1-3': {
      id: 'card-1-3',
      list: 'list-1',
      title: 'learn angular',
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
      const newColumns = [...state.columns];
      const newPosition = newColumns.splice(source.index, 1)[0];
      newColumns.splice(destination.index, 0, newPosition);

      return {
        ...state,
        columns: newColumns
      }
    }

    case DRAG_END_CARD: {
      const { destination, source } = action.payload;

      // drop card in the same list
      if(source.droppableId === destination.droppableId) {
        const droppedId = source.droppableId;
        const lists = state.lists[droppedId];
        const newCards = [...lists.cards];
        [newCards[source.index], newCards[destination.index]] = [newCards[destination.index], newCards[source.index]]
        return {
          ...state,
          lists: {
            ...state.lists,
            [droppedId]: {
              ...lists,
              cards: newCards
            }
          }
        }
      }

      // drop card other list
      console.log(action.payload)
      const droppedIdStart = source.droppableId;
      const droppedIdEnd = destination.droppableId;
      const listStart = state.lists[droppedIdStart];
      const listEnd = state.lists[droppedIdEnd];
      const newCardsStart = [...listStart.cards];
      const newCardsEnd = [...listEnd.cards];

      // cut card in list start
      const getCardSpiced = newCardsStart.splice(source.index, 1)[0];
      newCardsEnd.splice(destination.index, 0, getCardSpiced);

      return {
        ...state,
        lists: {
          ...state.lists,
          [droppedIdStart]: {
            ...listStart,
            cards: newCardsStart
          },
          [droppedIdEnd]: {
            ...listEnd,
            cards: newCardsEnd
          }
        }
      }
    }

    case CHANGE_TITLE_CARD: {
      const { cardId, cardTitle } = action.payload;
      const newCards = state.cards[cardId];
      newCards.title  = cardTitle;

      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: newCards
        }
      }
    }

    case ADD_CARD: {
      const { listId, cardTitle } = action.payload;
      const cardId = new Date().getTime();

      const newLists = {
        ...state.lists,
        [listId]: {
          ...state.lists[listId],
          cards: [...state.lists[listId].cards, cardId]
        }
      }

      return {
        ...state,
        lists: newLists,
        cards: {
          ...state.cards,
          [cardId]: {
            id: cardId,
            list: listId,
            title: cardTitle
          }
        }
      }

    }
    case ADD_LIST:{
      const id = new Date().getTime();
      const listId = `list-${id}`;
      const newList = {
        id: listId,
        title:action.payload,
        cards:[]
      }
      return {
        ...state,
        lists:{
          ...state.lists,
          [listId]:  newList
        },
        columns:[
          ...state.columns,
          listId
        ]
      }
    }
    
    default:
      return state;
  }
}