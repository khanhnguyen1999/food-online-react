import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action";
import { Action } from '../../models/IRoute'
const initState = {
  ACCESS_TOKEN: localStorage.getItem("token") || ""
}

export default function AuthReducer(state = initState, action: Action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
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