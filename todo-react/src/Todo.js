import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Tittle from './components/Title';
import Logo from './components/Logo';
import Input from './components/Input';
import TodoList from './components/List/TodoList';

const Todo = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList((prevState) => [...prevState, { id: new Date().getTime(), item }]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

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
        <Input addItem={addItem} />
      </Grid>
      <Grid item xs={12}>
        <TodoList items={list} removeItem={removeItem} />
      </Grid>
    </Grid>
  );
};

export default Todo;
