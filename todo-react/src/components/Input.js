import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const Input = ({ addItem }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setTask('');
  }, [addItem]);

  const inputHandler = (event) => {
    setError(false);
    setTask(event.target.value);
  };

  const addItemHandler = () => {
    if (!task) {
      setError(true);
    } else {
      addItem(task);
    }
  };

  return (
    <div style={{ display: 'inline-flex' }}>
      <div style={{ margin: '5px' }}>
        <TextField
          label="Type a new task"
          value={task}
          onChange={(event) => inputHandler(event)}
          error={error}
        />
      </div>
      <div style={{ alignSelf: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => addItemHandler()}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

Input.propTypes = {
  addItem: PropTypes.func,
};

export default Input;
