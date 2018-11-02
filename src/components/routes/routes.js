import React from 'react'
import {Route} from 'react-router-dom'
import {withRoutes} from '../../utils/hocs'

const Routes = ({routes}) => routes.map(({path, component}) => (
  <Route exact path={path} component={component} key={path}/>
))


export default withRoutes(Routes)