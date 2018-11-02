import { connect } from 'react-redux'

export const withRoutes = Component => connect(({routes}) => ({routes}))(Component)

export const withLanguage = Component => connect(({language}) => ({language}))(Component)

export const withNavigation = Component => connect(({navigation}) => ({navigation}))(Component)