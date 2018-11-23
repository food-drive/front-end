import store from '../../utils/store'

import { login, getUser } from '../../utils/apis'

export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const FETCH_USER = 'FETCH_USER'

export const loginAction = ({username, password}) => {
  login({username, password})
  .then(token => {
    store.dispatch({
      type: LOGIN,
      token
    })
  }
  ).catch(error => {
    store.dispatch({
      type: LOGIN_FAILED,
      error: error.message
    })
  })
}

export const fetchUser = () => {
  getUser()
  .then(user => store.dispatch({
      type: FETCH_USER,
      user
    })
  )
}
