import React, { createContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { object, node } from 'prop-types';

import useDefaultContext from '../../utils/mainContext';
import Navigation from '../Navigation';

export const MainContext = createContext();

const Wrapper = ({ 
  location, history, match, children }) => {
  const state = {
    ...useDefaultContext(),
    location,
    history,
    match,
  };

  return (
    <MainContext.Provider value={state}>
      <>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Navigation />
        {
          children
        }
      </>
    </MainContext.Provider>
  );
};

Wrapper.propTypes = {
  location: object.isRequired,
  history: object.isRequired,
  match: object.isRequired,
  children: node.isRequired,
};

export default withRouter(Wrapper);
