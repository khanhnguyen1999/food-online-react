import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Store } from 'store/index'
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import ThemeProvider from './components/Header/react-material-ui-dark-mode';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';

import { initRequest } from 'services';

initRequest(Store);

const theme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

ReactDOM.render(
  <Provider store={Store}>
    <ToastProvider>
      <Router>
        <Suspense fallback={<div />}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Suspense>
      </Router>
    </ToastProvider>
  </Provider>,
  document.getElementById('root')
);

