import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import {withNavigation, withLanguage} from '../../utils/hocs'

const drawerWidth = 300

const styles = theme => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
})

const Header = ({classes, language, navigation, open, toggleDrawer}) => (
  <AppBar
    position="absolute"
    color="secondary"
    className={classNames(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar className={classes.toolbar} disableGutters={!open}>
      <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" >
        {
          language.pages[navigation.find(({selected}) => selected).id].title
        }
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(withLanguage(withNavigation(Header)))
