import { combineReducers } from 'redux'
import routes from '../components/routes/routes-reducer'
import language from './language-reducer'
import navigation from '../components/navigation/navigation-reducer'

export default combineReducers({
  routes,
  navigation,
  language
})
