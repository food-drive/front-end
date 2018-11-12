import {
  LOGIN
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
  const {type, token} = action
  switch (type) {
    case LOGIN: {
      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token)
      return {
        isLoggedIn: true,
        token
      }
    }
    case LOGOUT: {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
      return {
        isLoggedIn: false,
        token
      }
    }
    default:
      return state
  }
}