import React from 'react';
import { Container } from '@material-ui/core';
import Todo from './Todo';
import './App.css';

const App = () => {
  return (
    <>
      <Container>
        <Todo />
      </Container>
    </>
  );
};

export default App;
