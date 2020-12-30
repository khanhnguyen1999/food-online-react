import { NotifyType } from 'models/IRoute'

const nameSpace = 'notification:';

export const SHOW_NOTIFICATION = `${nameSpace}SHOW_NOTIFICATION`
export const HIDE_NOTIFICATION = `${nameSpace}HIDE_NOTIFICATION`

export const actShowNotification = ({ type, isContent }: NotifyType) => ({
  type: SHOW_NOTIFICATION,
  payload: {
    type,
    isContent
  }
})
export const actHideNotification = () => ({
  type: HIDE_NOTIFICATION,
})