import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'

const styles = theme => ({
  drawer: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 300,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  }
})

const Navigation = ({classes, open}) => (
  <Drawer
    variant="permanent"
    anchor="left"
    open={open}
    classes={{
      paper: classNames(classes.drawer, !open && classes.drawerClose)
    }}
  >
  </Drawer>
)

export default withStyles(styles)(Navigation)
