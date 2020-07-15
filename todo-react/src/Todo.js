import React from 'react';
import { Grid } from '@material-ui/core';
import Tittle from './components/Title';
import Logo from './components/Logo';
import Input from './components/Input';
import List from './components/List/List';

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
        <Input />
      </Grid>
      <Grid item xs={12}>
        <List />
      </Grid>
    </Grid>
  );
};

export default todo;
