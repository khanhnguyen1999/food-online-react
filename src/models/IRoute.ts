export type IRouteAuth = {
  component: React.FunctionComponent,
  isAuthenticated?: boolean,
  exact?: boolean,
  path: string
}