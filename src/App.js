import React, { createContext } from 'react';
import {
  createMuiTheme,
} from '@material-ui/core/styles'

import {
  ThemeProvider,
} from '@material-ui/styles';

// import Routes from './components/routes/routes'

import useDefaultContext from './utils/mainContext';

const Context = createContext()

const { Provider } = Context;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f08a00'
    },
    secondary: {
      main: '#465f0f',
    },
  }
});

const App = () => {
  return (
    <Provider value={useDefaultContext()}>
      <ThemeProvider theme={theme}>
        <div>ciao</div>
      </ThemeProvider>
    </Provider>
          // <Router>
          //   <Routes/>
          // </Router>
  )
}

export default App;
