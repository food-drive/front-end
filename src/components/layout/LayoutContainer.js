import { connect } from 'react-redux'

import { fetchEventList } from './layoutActions'
import { fetchUser } from '../login/loginActions'

import Layout from './Layout'

const mapStateToProps = ({eventList}) => ({eventList})

const mapDispatchToProps = () => ({
  fetchEventList: () => fetchEventList(),
  fetchUser: () => fetchUser()
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
