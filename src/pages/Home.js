import React, { Fragment } from 'react';
import {
  Typography,
} from '@material-ui/core';
import DataTop from '../components/DataTop';
import DataWeekly from '../components/DataWeekly';

export default () => (
  <Fragment>
    <Typography variant="h4">
      Welcome to My Dashboard!
    </Typography>
    <DataTop />
    <DataWeekly />
  </Fragment>

);