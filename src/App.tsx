import React from 'react';
import { Switch } from 'react-router-dom';

// material core
import { makeStyles, createStyles } from '@material-ui/core/styles';

// routes
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';



// feature
import { Login } from 'features/Login';
import Dashboard from 'layouts/Dashboard';
import Register from 'features/Register';

import { useSelector } from 'react-redux';
import { accessTokenSelector } from 'selectors/auth.selector';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const accessToken = useSelector(accessTokenSelector)
  
  return (
    <div className={classes.root}>
      <Switch>
        <GuestGuard path="/login"  isAuthenticated={accessToken ? true: false} component={Login} />
        <GuestGuard path="/register" isAuthenticated={accessToken ? true: false} component={Register} />
        <AuthGuard path="/" isAuthenticated={accessToken ? true: false} component={Dashboard} />
      </Switch>
    </div>
  );
}
