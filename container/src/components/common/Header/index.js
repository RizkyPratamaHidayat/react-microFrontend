import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

import globalStyles from '../../../styles/globalStyles';

export default function Header({ isSignedIn, onSignOut }) {
  const classes = globalStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
  
      <AppBar data-testid="header"
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            <span className="yellow-text">App</span>
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={'/authSite'}
            onClick={onClick}
          >
           authSite
          </Button>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={'/dashboardSite'}>
             dashboardSite
          </Button>
        </Toolbar>
      </AppBar>

  );
}
