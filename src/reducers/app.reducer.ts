import { IAppState } from 'models/IRootState';

import { Action } from 'models/IRoute';
import { SET_LOADING, SET_DIALOG } from '../actions/app.action';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
    dataUpdate: ''
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
          dataUpdate: payload.dataUpdate
        },
      };
    default:
      return state;
  }
};

export default reducer;
