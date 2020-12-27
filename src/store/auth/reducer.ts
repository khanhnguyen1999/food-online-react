import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action";
import { Action } from '../../models/IRoute'
import { IAuthState } from 'models/IRootState';

const initState: IAuthState = {
  ACCESS_TOKEN: localStorage.getItem("token") || ""
}

export default function AuthReducer(state = initState, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("token ", action.payload)
      return {
        ...state,
        ACCESS_TOKEN: action.payload
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        ACCESS_TOKEN: ''
      }
    default:
      return state;
  }
}