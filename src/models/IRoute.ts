export type IRouteAuth = {
  component: React.FunctionComponent,
  isAuthenticated?: boolean,
  exact?: boolean,
  path: string
}
export type IUserInfo = {
  token: any,
  email: string,
  password: string,
  user: string,
  userid: number
}