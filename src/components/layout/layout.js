import React from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import Header from './header'
import Navigation from '../navigation/Navigation'
import Content from './content'

import 'typeface-roboto'
import { routesIds } from '../routes/routes-list';

const styles = () => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  header: {},
  dashboard: {}
})

class Layout extends React.Component {
  state= {
    open: false
  }

  toggleDrawer () {
    this.setState({open: !this.state.open})
  }

  render () {
    const {classes, children, isLoggedIn, routes} = this.props
    const loginPage = routes.find(({id}) => id === routesIds.login)
    return (
      !isLoggedIn ?
        <Redirect to={loginPage.path}/> :
        <div className={classes.root}>
          <Header
            open={this.state.open}
            toggleDrawer={this.toggleDrawer.bind(this)}
          />
          <Navigation open={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)}/>
          <Content>
            {children}
          </Content>
        </div>
    )
  }
}

const mapStateToProps = ({user: {isLoggedIn}, routes}) => ({isLoggedIn, routes})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))
