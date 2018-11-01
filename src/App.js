import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { JssProvider } from 'react-jss';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  createGenerateClassName,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Routes from './components/routes/routes'
import Layout from './components/layout/layout'

import store from './utils/store'

const options = {
  theme: {
    typography: {
      useNextVariants: true,
      suppressDeprecationWarnings: true
    },
    palette: {
      primary: {
        main: '#f08a00'
      },
      secondary: {
        main: '#465f0f',
      },
    }
  },
  dangerouslyUseGlobalCSS: false,
  productionPrefix: 'jss',
};

const App = () => {
  const { dangerouslyUseGlobalCSS, productionPrefix, theme } = options;

  const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS,
    productionPrefix,
  });
  return (
    <Provider store={store}>
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <CssBaseline />
          <Layout>
            <Router>
              <Routes/>
            </Router>
          </Layout>
        </MuiThemeProvider>
      </JssProvider>
    </Provider>
  )
}

export default App;
