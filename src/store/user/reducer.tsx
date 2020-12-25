import { SET_USER_INFOR, SET_USER_DETAIL } from "./action";
import { LOGOUT_SUCCESS } from "../auth/action";
import { Action } from '../../models/IRoute'

const initState = {
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