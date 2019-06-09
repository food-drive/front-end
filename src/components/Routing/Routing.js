import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Users from '../Users/Users';

const Routing = () => {
  // const routeContext = useContext(RouteContext);
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/users"
        component={Users}
      />
    </Switch>
  );
};

export default Routing;
