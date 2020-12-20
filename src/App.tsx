import React from 'react';
import { Switch } from 'react-router-dom';

// material core
import { makeStyles, createStyles } from '@material-ui/core/styles';

// routes
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// feature
import Login from 'features/Login';
import Dashboard from 'layouts/Dashboard';
import Register from 'features/Register';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const isAuth = localStorage.getItem('token') ? true : false;
  
  return (
    <div className={classes.root}>
      <Switch>
        <GuestGuard path="/login"  isAuthenticated={isAuth} component={Login} />
        <GuestGuard path="/register" isAuthenticated={isAuth} component={Register} />
        <AuthGuard path="/" isAuthenticated={isAuth} component={Dashboard} />
      </Switch>
    </div>
  );
}
