import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="subtitle1" color="inherit">
        My Dashboard App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;