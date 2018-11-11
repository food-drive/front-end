import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setSelectedRoute } from './NavigationActions'

const NavigationPage = ({setSelectedRoute, location: { pathname }, children}) => {
  setSelectedRoute(pathname)
  return <Fragment>
    {
      children
    }
  </Fragment>
}

const mapStateToProps = ({location}) => ({location})

const mapDispatchToProps = dispatch => ({
  setSelectedRoute: pathName => dispatch(setSelectedRoute(pathName))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationPage))
