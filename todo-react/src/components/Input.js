import React from 'react';
import { TextField, Button } from '@material-ui/core';

const input = () => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <div style={{ margin: '5px' }}>
        <TextField label="Type a new task" />
      </div>
      <div style={{ alignSelf: 'center' }}>
        <Button variant="contained" color="primary" size="small">
          Add
        </Button>
      </div>
    </div>
  );
};

export default input;
