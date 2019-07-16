import React, { useContext } from 'react';
import { node } from 'prop-types';
import { Box } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

import Navigation from '../Navigation';
import AppBar from '../AppBar';
import Content from '../Content';
import MenuContext from '../../Contexts/MenuContext';
import MainContext from '../../Contexts/MainContext';

import { routesMap } from '../../utils/routes-list';

const NavigationPage = ({ children }) => {
  const { menuWidth } = useContext(MenuContext);
  const { user, events } = useContext(MainContext);
  const { state: { isLoggedIn, active } } = user;
  return (isLoggedIn && (
    <Box display="flex">
      <AppBar />
      <Navigation menuWidth={menuWidth} />
      {
        (active && events.state.length && <Content>{children}</Content>)
      }
    </Box>
  )
  )
  || <Redirect to={routesMap.login.path} />;
};

NavigationPage.propTypes = {
  children: node.isRequired,
};

export default NavigationPage;
