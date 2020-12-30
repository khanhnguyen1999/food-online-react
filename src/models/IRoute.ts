export type IRouteAuth = {
  component: React.FunctionComponent,
  isAuthenticated?: boolean,
  exact?: boolean,
  path: string
}

export type Action = { type: string, payload: any }


export enum AlertType {
  error = "error",
  warning = "warning",
  info = "info",
  success = "success"
}

export type NotifyType = {
  type: AlertType,
  isContent: string,
  isShow: boolean,
}