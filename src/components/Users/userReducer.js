import {
  loginActions,
} from '../Login';

import {
  LOGOUT,
  FETCH_USER,
} from './userActions';

const {
  LOGIN,
  LOGIN_FAILED,
} = loginActions;

export default (state, action) => {
  const {
    type, token, user, error,
  } = action;
  switch (type) {
    case LOGIN: {
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
      return {
        ...state,
        isLoggedIn: true,
        token,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoggedIn: false,
        error,
      };
    }
    case LOGOUT: {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
      return {
        ...state,
        isLoggedIn: false,
        token,
      };
    }
    case FETCH_USER: {
      return {
        ...state,
        ...user,
      };
    }
    default:
      return state;
  }
};
