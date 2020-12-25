export type IRouteAuth = {
  component: React.FunctionComponent,
  isAuthenticated?: boolean,
  exact?: boolean,
  path: string
}

export type Action = { type: string, payload: any }
  // | { type: 'SET_USER_INFOR', payload: string }
  // | { type: 'LOGOUT_SUCCESS', payload: boolean }
  // | { type: 'SET_USER_INFOR', payload: string }
  // | { type: 'setIsError', payload: boolean };

