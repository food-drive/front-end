import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Redirect, withRouter} from 'react-router-dom'

import routes, { routesIds } from './routes-list'

import Wrapper from '../wrapper/Wrapper'
import Layout from '../layout/LayoutContainer'
import Page from '../../pages/page'
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
      <Wrapper>
        <Layout>
          <Page>
            <Component/>
          </Page>
        </Layout>
      </Wrapper>
    )}
  />
)

const Routes = () =>
  <Fragment>
    <Route exact path="/" component={() => (
      <Redirect to="/home" />
    )}/>
    <LayoutRoutes components={RoutesComponents} />
    <Route exact path="/login" render={Login}/>
  </Fragment>

export default withRouter(connect(({routes}) => ({routes}))(Routes))