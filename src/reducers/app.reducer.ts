import { IAppState } from 'models/IRootState';

import { Action } from 'models/IRoute';
import { SET_LOADING, SET_DIALOG, SET_LANGUAGE } from '../actions/app.action';

const initialState: IAppState = {
  isLoading: false,
  dialog: {
    type: 'error',
    isShow: false,
    content: '',
    dataUpdate: ''
  },
  isLanguage: 'en'
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
    case SET_LANGUAGE:
      return {
        ...state,
        isLanguage: payload,
      }
    default:
      return state;
  }
};

export default reducer;
