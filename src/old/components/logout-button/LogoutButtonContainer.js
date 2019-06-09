import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import LogoutButton from './LogoutButton'
import { logoutAction } from './logoutActions'

const mapStateToProps = null

const mapDispatchToProps = () => ({
  logout: () => logoutAction()
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LogoutButton))
