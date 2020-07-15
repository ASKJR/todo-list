import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const title = ({ children }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  );
};

title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default title;
