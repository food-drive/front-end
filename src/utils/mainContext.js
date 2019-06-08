import { useReducer, useContext } from 'react';
import routes from '../components/routes/routes-reducer'
import language from './language-reducer'
import user from '../components/login/userReducer'
import eventList from '../components/layout/eventListReducer'
import collectionPointList from '../components/collection-point-list/collectionPointListReducer'

import defaultRoutes from '../components/routes/routes-list';
import it from '../i18n/it'

const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)

const defaultUser = {
  isLoggedIn: token && true,
  token
}

export default () => useContext({
  routes: useReducer(routes, defaultRoutes),
  language: useReducer(language, it),
  user: useReducer(user, defaultUser),
  eventList: useReducer(eventList, []),
  collectionPointList: useReducer(collectionPointList, []),
});
