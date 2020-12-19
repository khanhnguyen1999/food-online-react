import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Suspense fallback={<div/>}>
      <Switch>
        <App />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
