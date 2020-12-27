import { IAppState } from 'models/IRootState';

import { Action } from 'models/IRoute';
import { SET_LOADING, SET_DIALOG } from './action';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
  },
};

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_DIALOG:
      return {
        ...state,
        dialog: {
          type: payload.type,
          isShow: payload.isShow,
          content: payload.content,
        },
      };
    default:
      return state;
  }
};

export default reducer;
