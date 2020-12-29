import React, { useState } from 'react';


// material core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import useTheme from '@material-ui/core/styles/useTheme';
import { useChangeTheme } from './react-material-ui-dark-mode';
import Select from '@material-ui/core/Select';


import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

import { currentUserSelector } from "selectors/user.selector";

import { actLogoutSuccess } from 'actions/auth.action'
// styles
import useStyles from './style';
import { authService } from 'services';


function Header() {
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch()
  const userData = useSelector(currentUserSelector)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogOut = () => {
    authService.logOut();
    dispatch(actLogoutSuccess())
    history.push("/login")
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const theme = useTheme();
  const changeTheme = useChangeTheme();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {
          userData && userData.lastname
        }
      </MenuItem>
      <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const [language, setLanguage] = useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };


  // dark mode 

  // useEffect(() => {
  //   onChangeHandle(darkMode.value);
  // });


  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Food Online
          </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Select
            labelId="language"
            id="language"
            name="language"
            value={language}
            onChange={handleChange}
          >
            <MenuItem value={10}>Vietnamese</MenuItem>
            <MenuItem value={20}>English</MenuItem>
          </Select>
          <MenuItem>
            <IconButton
              title="Toggle light/dark mode"
              onClick={() => changeTheme()}
            >
              {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </MenuItem>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
        {renderMenu}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
