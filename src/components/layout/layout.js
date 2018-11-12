import React from 'react'

import { Redirect, withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import Header from './Header'
import Navigation from '../navigation/NavigationContainer'
import Content from './Content'

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

  componentDidMount () {
    const { fetchEventList, fetchUser } = this.props
    fetchEventList()
    fetchUser()
  }

  render () {
    const {
      classes,
      children,
      isLoggedIn,
      routes,
      eventList
    } = this.props
    const loginPage = routes.find(({id}) => id === routesIds.login)
    const activeEvent = eventList.find(({attiva}) => attiva)
    return (
      !isLoggedIn ?
        <Redirect to={loginPage.path}/> :
        <div className={classes.root}>
          <Header
            open={this.state.open}
            toggleDrawer={this.toggleDrawer.bind(this)}
            event={activeEvent}
          />
          <Navigation open={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)}/>
          <Content>
            {children}
          </Content>
        </div>
    )
  }
}

export default withRouter(withStyles(styles)(Layout))
