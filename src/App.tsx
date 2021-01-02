import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

// material core
import { makeStyles, createStyles } from '@material-ui/core/styles';

// routes
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// servers
import { authService } from 'services';

// feature
import { Login } from 'features/Login';
import Dashboard from 'layouts/Dashboard';
import Register from 'features/Register';

// selectors
import { accessTokenSelector } from 'selectors/auth.selector';
import { langSelector } from 'selectors/app.selector';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);

export default function App() {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const accessToken = useSelector(accessTokenSelector) || authService.getAccessToken();
  const language = useSelector(langSelector);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

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
