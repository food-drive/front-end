import React, { useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes, { routesIds } from '../../utils/routes-list';
import Home from '../Home';
import CollectionPoint from '../CollectionPoint';
import CollectionPoints from '../CollectionPoints';
import ProductLoadsList from '../ProductLoadsList';
import Reports from '../Reports';
import TeamLeader from '../TeamLeader';
import Login from '../Login';

import NavigationPage from '../NavigationPage';

const Routing = () => {
  const getRouteComponent = useCallback(
    (Component, routeId) => ({
      Component,
      path: routes.find(({ id }) => id === routeId).path,
    }),
    [],
  );

  const RoutesComponents = [
    getRouteComponent(Home, routesIds.home),
    getRouteComponent(CollectionPoints, routesIds.collectionPoints),
    getRouteComponent(CollectionPoint, routesIds.collectionPoint),
    getRouteComponent(ProductLoadsList, routesIds.productLoadsList),
    getRouteComponent(TeamLeader, routesIds.teamLeader),
    getRouteComponent(Reports, routesIds.reports),
  ];
  const loginRoute = getRouteComponent(Login, routesIds.login);

  return (
    <Switch>
      {
        RoutesComponents.map(({ path, Component }) => (
          <Route
            exact
            path={path}
            key={path}
            render={() => (
              <NavigationPage>
                <Component />
              </NavigationPage>
            )}
          />
        ))
      }
      <Route
        exact
        path="/"
        render={() => (
          <Redirect to="/home" />
        )}
      />
      <Route
        exact
        path={loginRoute.path}
        key={loginRoute.path}
        render={() => (
          <Login />
        )}
      />
    </Switch>
  );
};

export default Routing;
