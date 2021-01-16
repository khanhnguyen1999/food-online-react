const nameSpace = 'trello:';

export const DRAG_END_LIST = `${nameSpace}DRAG_END_LIST`;
export const DRAG_END_CARD = `${nameSpace}DRAG_END_CARD`;
export const CHANGE_TITLE_CARD = `${nameSpace}CHANGE_TITLE_CARD`;
export const ADD_CARD = `${nameSpace}ADD_CARD`;
export const ADD_LIST = `${nameSpace}ADD_LIST`;

export const onDragEndList = (payload: any) => ({ type: DRAG_END_LIST, payload });

export const onDragEndCard = (payload: any) => ({ type: DRAG_END_CARD, payload });

export const changeTitleCard = (cardId: string, cardTitle: string) => ({
  type: CHANGE_TITLE_CARD, 
  payload: { cardId, cardTitle }
})


export const addCard = (listId: string | undefined, cardTitle: string) => ({
  type: ADD_CARD, 
  payload: { listId, cardTitle }
})

export const addList = (listTitle:string)=>({
  type:ADD_LIST,
  payload:listTitle
})