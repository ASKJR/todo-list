import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoListItem from './TodoListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ items, removeItem }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <TransitionGroup>
        {items.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="item">
            <TodoListItem task={task} removeItem={removeItem} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      item: PropTypes.string,
    })
  ),
  removeItem: PropTypes.func,
};

export default TodoList;
