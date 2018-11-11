import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Login from './Login'
import { loginAction } from './loginActions'

const mapStateToProps = null

const mapDispatchToProps = () => ({
  login: params => {
    console.log('nooooooo')
    loginAction(params)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
