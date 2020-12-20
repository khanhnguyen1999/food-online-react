import React from 'react'
import { Redirect, Route } from 'react-router-dom';

// types
import { IRouteAuth } from 'models/IRoute';

const AuthRoute = ({ component: Component, isAuthenticated = false, ...rest }: IRouteAuth) => {
  
  if(!isAuthenticated) return <Redirect to={{ pathname: '/login' }} />

  return <Route {...rest} component={Component} />;
};

export default AuthRoute;