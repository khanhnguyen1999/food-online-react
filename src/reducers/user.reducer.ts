import { SET_USER_INFOR } from "../actions/user.action";
import { LOGOUT_SUCCESS } from "../actions/auth.action";
import { Action } from '../models/IRoute'
import { IUserState } from 'models/IRootState';

const initState: IUserState = {
  currentUser: null
}

export default function UserReducer(state = initState, action: Action) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        currentUser: action.payload
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
}