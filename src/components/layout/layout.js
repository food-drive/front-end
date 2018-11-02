import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Header from './header'
import Navigation from '../navigation/navigation'
import Content from './content'

import 'typeface-roboto'

const styles = theme => ({
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
    const {classes, children} = this.props
    return (
      <div className={classes.root}>
        <Header open={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)}/>
        <Navigation open={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)}/>
        <Content>
          {children}
        </Content>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
