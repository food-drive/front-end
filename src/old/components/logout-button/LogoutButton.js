import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import { withLanguage } from '../../utils/hocs'

import Button from '@material-ui/core/Button'

const styles = theme => ({
  logoutButton: {
    right: 0
  }
})


const LogoutButton = ({classes, language, logout}) => (
  <Button className={classes.logoutButton} color="primary" onClick={logout}>{language.sections.header.logout}</Button>
)

export default withStyles(styles)(withLanguage(LogoutButton))
