import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Tittle from './components/Title';
import Logo from './components/Logo';
import Input from './components/Input';
import TodoList from './components/List/TodoList';

const Todo = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem('reactTodoList'));
    if (storageList) {
      setList(storageList);
    }
  }, []);

  const addItem = (item) => {
    const newItem = {
      id: new Date().getTime(),
      description: item,
      checked: false,
    };
    setList((prevState) => [...prevState, newItem]);
    localStorage.setItem('reactTodoList', JSON.stringify([...list, newItem]));
  };

  const removeItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    localStorage.setItem('reactTodoList', JSON.stringify(updatedList));
  };

  let todoList = null;
  if (list.length > 0) {
    todoList = <TodoList items={list} removeItem={removeItem} />;
  }

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
        {todoList}
      </Grid>
    </Grid>
  );
};

export default Todo;
