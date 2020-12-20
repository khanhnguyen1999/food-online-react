
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action";

const initState = {
  ACCESS_TOKEN: localStorage.getItem("token") || ""
}

export default function AuthReducer(state = initState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ACCESS_TOKEN: action.payload.token
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