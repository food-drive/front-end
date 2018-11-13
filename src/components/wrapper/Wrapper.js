import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { routesIds } from '../routes/routes-list'

const Wrapper = ({children, isLoggedIn, routes}) => {
  const loginPage = routes.find(({id}) => id === routesIds.login)
  return (
    !isLoggedIn ?
      <Redirect to={loginPage.path}/> :
      <Fragment>
      {
        children
      }
      </Fragment>
  )
}

const mapStateToProps = ({user: {isLoggedIn}, routes}) => ({isLoggedIn, routes})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)