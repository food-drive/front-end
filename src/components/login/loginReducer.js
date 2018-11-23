import {
  LOGIN,
  LOGIN_FAILED,
  FETCH_USER
} from './loginActions'

import {
  LOGOUT
} from '../logout-button/logoutActions'

const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)

const defaultState = {
  isLoggedIn: token && true,
  token
}

export default (state = defaultState, action) => {
  const {type, token, user, error} = action
  switch (type) {
    case LOGIN: {
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token)
      return {
        ...state,
        isLoggedIn: true,
        token
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoggedIn: false,
        error
      }
    }
    case LOGOUT: {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
      return {
        ...state,
        isLoggedIn: false,
        token
      }
    }
    case FETCH_USER: {
      return {
        ...state,
        ...user
      }
    }
    default:
      return state
  }
}