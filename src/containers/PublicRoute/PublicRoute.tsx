import React, { createElement } from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) => (
    isAuthenticated
      ? createElement(component, props)
      : <Redirect to={{ pathname: '/' }} />
  );
  return <Route {...rest} render={routeComponent} />;
};