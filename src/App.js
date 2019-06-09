import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  createMuiTheme,
} from '@material-ui/core/styles';

import {
  ThemeProvider,
} from '@material-ui/styles';

import Routing from './components/Routing';
import Wrapper from './components/Wrapper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f08a00',
    },
    secondary: {
      main: '#465f0f',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Wrapper>
        <Routing />
      </Wrapper>
    </Router>
  </ThemeProvider>
);

export default App;
