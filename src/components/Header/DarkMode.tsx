import React, { memo } from 'react';

// material core
import useTheme from '@material-ui/core/styles/useTheme';
import IconButton from '@material-ui/core/IconButton';

// material icon
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

// hooks
import { useChangeTheme } from './react-material-ui-dark-mode';


function DarkMode() {
  const theme = useTheme();
  const changeTheme = useChangeTheme();
  
  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      title="Change Theme"
      onClick={() => changeTheme()}
    >
      {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default memo(DarkMode);
