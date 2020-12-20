export type IRouteAuth = {
  component: React.FunctionComponent,
  isAuthenticated?: boolean,
  exact?: boolean,
  path: string,
  email: string,
  password: string,
  userid: number,
  token: any,
  dispatch: any
}