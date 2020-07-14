import React from 'react';
import { Grid } from '@material-ui/core';
import Tittle from './components/Title';
import Logo from './components/Logo';

const todo = () => {
  return (
    <Grid
      container
      spacing={3}
      align="center"
      justify="center"
      direction="column"
      style={{ paddingTop: '30px' }}
    >
      <Grid item xs={12}>
        <Tittle>React To-Do list</Tittle>
      </Grid>
      <Grid item xs={12}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <h1>Input</h1>
      </Grid>
      <Grid item xs={12}>
        <h1>List</h1>
      </Grid>
    </Grid>
  );
};

export default todo;
