import { SET_USER_INFOR } from "../actions/user.action";
import { LOGOUT_SUCCESS } from "../actions/auth.action";
import { Action } from '../models/IRoute'
import { ITrelloState } from 'models/IRootState';

const initState: ITrelloState = {
  trelloData: null
}

export default function TrelloReducer(state = initState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}