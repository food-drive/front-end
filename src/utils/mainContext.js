import { useReducer, useContext } from 'react';
import routes from './routes-reducer';
import language from './language-reducer';
import user from './userReducer';
import eventList from './eventListReducer';
import collectionPointList from './collectionPointListReducer';

import defaultRoutes from './routes-list';
import it from '../i18n/it';

const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

const defaultUser = {
  isLoggedIn: token && true,
  token,
};

export default () => ({
  routes: useReducer(routes, defaultRoutes),
  language: useReducer(language, it),
  user: useReducer(user, defaultUser),
  eventList: useReducer(eventList, []),
  collectionPointList: useReducer(collectionPointList, []),
});
