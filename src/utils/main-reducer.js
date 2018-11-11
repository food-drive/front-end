import { combineReducers } from 'redux'
import routes from '../components/routes/routes-reducer'
import language from './language-reducer'
import navigation from '../components/navigation/navigationReducer'
import user from '../components/login/loginReducer'

export default combineReducers({
  routes,
  navigation,
  language,
  user
})
