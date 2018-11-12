import React from 'react'
import { connect } from 'react-redux'
import {Route, withRouter} from 'react-router-dom'

import routes, { routesIds } from './routes-list'

import Home from '../../pages/home'
import Login from '../../pages/login'
import CollectionPointList from '../../pages/collection-point-list'
import CollectionPoint from '../../pages/collection-point'
import ProductLoadsList from '../../pages/product-loads-list'
import TeamLeader from '../../pages/team-leader'
import Reports from '../../pages/reports'

const routesComponents = {
  [routesIds.login]: Login,
  [routesIds.home]: Home,
  [routesIds.collectionPointList]: CollectionPointList,
  [routesIds.collectionPoint]: CollectionPoint,
  [routesIds.productLoadsList]: ProductLoadsList,
  [routesIds.teamLeader]: TeamLeader,
  [routesIds.reporta]: Reports,
}

const Routes = () => routes.map(({path, id}) => (
  <Route exact path={path} component={routesComponents[id]} key={path}/>
))

export default withRouter(connect(({routes}) => ({routes}))(Routes))