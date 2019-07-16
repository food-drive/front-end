import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  CssBaseline,
} from '@material-ui/core';

import {
  ThemeProvider,
} from '@material-ui/styles';

import Routing from './components/Routing';
import Wrapper from './components/Wrapper';
import Page from './components/Page';

import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Wrapper>
        <Page>
          <Routing />
        </Page>
      </Wrapper>
    </Router>
  </ThemeProvider>
);

export default App;
