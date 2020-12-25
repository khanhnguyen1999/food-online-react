import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Store } from './store/index'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
