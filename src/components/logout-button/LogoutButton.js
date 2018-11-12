import React from 'react'

import { withLanguage } from '../../utils/hocs'

import Button from '@material-ui/core/Button'

const LogoutButton = ({language, logout}) => (
  <Button color="primary" onClick={logout}>{language.sections.header.logout}</Button>
)

export default withLanguage(LogoutButton)
