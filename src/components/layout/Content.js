import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
})

const Content = ({classes, children}) => (
  <main
    variant="permanent"
    className={classes.content}
  >
    <div className={classes.appBarSpacer}/>
    <Fragment>
      {children}
    </Fragment>
  </main>
)

export default withStyles(styles)(Content)
