import useReducer from './useReducer';
import language from './language-reducer';
import { userReducer as user } from '../components/Users';
import { eventsReducer } from '../components/Page';
import it from '../i18n/it';

const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);

const defaultUser = {
  isLoggedIn: !!token,
  token,
};

export default () => ({
  language: useReducer(language, it),
  user: useReducer(user, defaultUser),
  events: useReducer(eventsReducer, []),
});
