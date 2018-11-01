import { connect } from 'react-redux'

const mapStateToProps = ({routes}) => ({routes})

export default Component => connect(mapStateToProps)(Component)
