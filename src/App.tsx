import React from 'react';
import { Switch } from 'react-router-dom';

// material core
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// routes
import AuthRoute from 'containers/AuthRoute';
import PublicRoute from 'containers/PublicRoute';



// feature
import { Login } from 'features/Login';
import Dashboard from 'layouts/Dashboard';
import Register from 'features/Register';

import { useSelector } from 'react-redux'
import { authSelector } from './selectors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const isAuth = useSelector(authSelector)
  console.log("auth ", isAuth)
  return (
    <div className={classes.root}>
      <Switch>
        <PublicRoute path="/login" isAuthenticated={isAuth.ACCESS_TOKEN} component={Login} />
        <PublicRoute path="/register" isAuthenticated={isAuth.ACCESS_TOKEN} component={Register} />
        <AuthRoute path="/" isAuthenticated={isAuth.ACCESS_TOKEN} component={Dashboard} />
      </Switch>
    </div>
  );
}
