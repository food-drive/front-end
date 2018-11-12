import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Login from './Login'
import { loginAction } from './loginActions'

const mapStateToProps = ({user: {isLoggedIn}, routes}) => ({isLoggedIn, routes})

const mapDispatchToProps = () => ({
  login: params => loginAction(params)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
