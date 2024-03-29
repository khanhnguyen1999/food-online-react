import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// material core
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FastfoodIcon from '@material-ui/icons/Fastfood';

// material icon
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FunctionsIcon from '@material-ui/icons/Functions';

// styles
import useStyles from './style';

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const { t: translate } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const _handleNavigate = (path: string) => () => {
    history.push(path)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={_handleNavigate('/home')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={translate('HOME')} />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/about')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/foods')}>
          <ListItemIcon><FastfoodIcon /></ListItemIcon>
          <ListItemText primary="Foods" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/trello')}>
          <ListItemIcon><FunctionsIcon /></ListItemIcon>
          <ListItemText primary="Trello" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>

    </nav>
  )
}

export default NavBar
