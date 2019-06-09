import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Header from './Header'
import Navigation from '../navigation/NavigationContainer'
import Content from './Content'

// import 'typeface-roboto'

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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  toggleDrawer() {
    this.setState({open: !this.state.open})
  }

  // componentDidMount () {
  //   const { fetchEventList, fetchUser } = this.props
  //   fetchEventList()
  //   fetchUser()
  // }

  render() {
    const {
      classes,
      children,
      eventList
    } = this.props
    const activeEvent = eventList.find(({attiva}) => attiva)
    return (
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

export default withStyles(styles)(Layout)
