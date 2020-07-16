import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from '@material-ui/core';

import { Cancel } from '@material-ui/icons';

const TodoListItem = ({ task, removeItem }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleToggle = () => {
    setChecked((prevState) => !prevState);
    const tasks = JSON.parse(localStorage.getItem('reactTodoList')).map(
      (item) => {
        if (item.id === task.id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      }
    );
    localStorage.setItem('reactTodoList', JSON.stringify(tasks));
  };
  return (
    <ListItem
      key={task.id}
      role={undefined}
      dense
      button
      onClick={() => handleToggle()}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': task.id }}
        />
      </ListItemIcon>
      <ListItemText
        id={task.id}
        primary={task.description}
        style={checked ? { textDecoration: 'line-through' } : {}}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => removeItem(task.id)}
        >
          <Cancel style={{ color: '#FF0000' }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

TodoListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    checked: PropTypes.bool,
  }),
  removeItem: PropTypes.func,
};

export default TodoListItem;
