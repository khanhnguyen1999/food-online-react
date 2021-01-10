const nameSpace = 'trello:';

export const DRAG_END_LIST = `${nameSpace}DRAG_END_LIST`;
export const DRAG_END_CARD = `${nameSpace}DRAG_END_CARD`;

export const onDragEndList = (payload: any) => ({ type: DRAG_END_LIST, payload });

export const onDragEndCard = (payload: any) => ({ type: DRAG_END_CARD, payload });
