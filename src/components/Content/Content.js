import React from 'react';
import { node } from 'prop-types';

import {
  Box,
} from '@material-ui/core';

const Content = ({ children }) => (
  <Box
    flexGrow="1"
    mt={8}
    p={5}
  >
    {children}
  </Box>
);

Content.propTypes = {
  children: node.isRequired,
};

export default Content;
