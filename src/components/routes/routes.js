import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, withRouter} from 'react-router-dom'

import routes, { routesIds } from './routes-list'

import Layout from '../layout/layout'

import Home from '../../pages/home'
import Login from '../../pages/login'
import CollectionPointList from '../../pages/collection-point-list'
import CollectionPoint from '../../pages/collection-point'
import ProductLoadsList from '../../pages/product-loads-list'
import TeamLeader from '../../pages/team-leader'
import Reports from '../../pages/reports'

const getRouteComponent = (Component, routeId, path) => ({
  Component,
  path: routes.find(({id}) => id === routeId).path
})

const RoutesComponents = [
  getRouteComponent(Home, routesIds.home),
  getRouteComponent(CollectionPointList, routesIds.collectionPointList),
  getRouteComponent(CollectionPoint, routesIds.collectionPoint),
  getRouteComponent(ProductLoadsList, routesIds.productLoadsList),
  getRouteComponent(TeamLeader, routesIds.teamLeader),
  getRouteComponent(Reports, routesIds.reports)
]

const LayoutRoutes = ({components}) => components.map(({Component, path}, i) =>
  <Route
    key={i}
    exact
    path={path}
    render={() => (
      <Layout>
        <Component/>
      </Layout>
    )}
  />
)

const Routes = () =>
  <Fragment>
    <LayoutRoutes components={RoutesComponents} />
    <Route exact path="/login" component={Login}/>
  </Fragment>

export default withRouter(connect(({routes}) => ({routes}))(Routes))