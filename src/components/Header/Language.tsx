import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux'

// material core
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

// material icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// configs
import { LANGUAGE } from '../../configs';

// redux
import { actSetLanguage } from 'actions/app.action'

function Language({ ...classes }) {
  const [language, setLanguage] = useState("en")
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch()

  const _handleOpenLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleChooseLanguage = (lang: string) => () => {
    setLanguage(lang);
    dispatch(actSetLanguage(lang))
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderTextLanguage = () => {
    switch (language) {
      case LANGUAGE.ENGLISH: {
        return 'ENGLISH';
      }
      case LANGUAGE.VIETNAMESE: {
        return 'VIETNAMESE';
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className={classes.menuLanguage}
        aria-controls="simple-menu"
        title="Change Language"
        aria-haspopup="true"
        onClick={_handleOpenLanguage}
      >
        {renderTextLanguage()} <ExpandMoreIcon />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem selected={language === LANGUAGE.ENGLISH} onClick={_handleChooseLanguage(LANGUAGE.ENGLISH)}>
          English
        </MenuItem>
        <MenuItem selected={language === LANGUAGE.VIETNAMESE} onClick={_handleChooseLanguage(LANGUAGE.VIETNAMESE)}>
          Vietnamese
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(Language);
