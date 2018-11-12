import { connect } from 'react-redux'

import Navigation from './Navigation'

const mapStateToProps = ({routes}) => ({routes})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
