import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from '@material-ui/core';

import { Comment } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ items, removeItem }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(value.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.item} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => removeItem(value.id)}
              >
                <Comment />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
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
};

export default TodoList;
