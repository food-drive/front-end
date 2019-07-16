import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { object, node } from 'prop-types';

import useMainContext from '../../utils/mainContext';
import MainContext from '../../Contexts/MainContext';
import RoutingContext from '../../Contexts/RoutingContext';
import MenuContext from '../../Contexts/MenuContext';

const menuWidth = 250;

const Wrapper = ({
  location, history, match, children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const mainState = useMainContext();
  const routingState = {
    location, history, match,
  };
  return (
    <RoutingContext.Provider value={routingState}>
      <MainContext.Provider value={mainState}>
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, menuWidth }}>
          {children}
        </MenuContext.Provider>
      </MainContext.Provider>
    </RoutingContext.Provider>
  );
};

Wrapper.propTypes = {
  location: object.isRequired,
  history: object.isRequired,
  match: object.isRequired,
  children: node.isRequired,
};

export default withRouter(Wrapper);
