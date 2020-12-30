import React from 'react';
import { Alert } from '@material-ui/lab';
import './styles.css';

import { useSelector } from 'react-redux'
import { showNotify } from 'selectors/notification.selector'

const Notification = () => {
  const state = useSelector(showNotify)
  return (
    <>
      { state.isShow && <div className="cusstom--notify">
        <Alert severity={state.type}>{state.isContent}</Alert>
      </div>}
    </>
  );
};

export default Notification;