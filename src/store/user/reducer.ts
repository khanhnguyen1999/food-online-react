import { SET_USER_INFOR } from "./action";
import { LOGOUT_SUCCESS } from "../auth/action";

const initState = {
  currentUser: null,
  hashUserData: {},
}
export default function UserReducer(state = initState, action: any) {
  switch (action.type) {
    case SET_USER_INFOR:
      return {
        ...state,
        currentUser: action.payload.user
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