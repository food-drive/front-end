import { combineReducers } from 'redux'
import routes from '../components/routes/routes-reducer'
import language from './language-reducer'
import user from '../components/login/loginReducer'
import eventList from '../components/layout/eventListReducer'
import collectionPointList from '../components/collection-point-list/collectionPointListReducer'

export default combineReducers({
  routes,
  language,
  user,
  eventList,
  collectionPointList
})
