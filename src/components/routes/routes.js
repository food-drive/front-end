import React from 'react'
import { connect } from 'react-redux'
import {Route, withRouter} from 'react-router-dom'

import routes from './routes-list'

const Routes = (props) => routes.map(({path, component}) => (
  <Route exact path={path} component={component} key={path}/>
))

export default withRouter(connect(({routes}) => ({routes}))(Routes))