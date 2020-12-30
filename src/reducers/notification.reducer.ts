import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/notification.action";
import { Action, NotifyType, AlertType } from '../models/IRoute'

const initState: NotifyType = {
  type: AlertType.success,
  isContent: "Hiding notification!",
  isShow: false
}
export default function NotifyReducer(state = initState, { payload, type }: Action) {
  switch (type) {
    case SHOW_NOTIFICATION:
      console.log("payload ", payload)
      return {
        ...state,
        type: payload.type,
        isContent: payload.isContent,
        isShow: true
      };
    case HIDE_NOTIFICATION:
      return {
        isShow: false
      }
    default:
      return state;
  }
}