import {
  LOGIN
} from './loginActions'

const defaultState = {
  isLoggedIn: false,
  token: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) || ''
}

export default (state = defaultState, action) => {
  const {type, token} = action
  if (type === LOGIN) {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token)
    return {
      isLoggedIn: true,
      token
    }
  }
  return state
}