import store from '../../utils/store'

import { login, getUser } from '../../utils/apis'

export const LOGIN = 'LOGIN'
export const FETCH_USER = 'FETCH_USER'

export const loginAction = ({username, password}) => {
  login({username, password})
  .then(token => store.dispatch({
      type: LOGIN,
      token
    })
  )
}

export const fetchUser = () => {
  getUser()
  .then(user => store.dispatch({
      type: FETCH_USER,
      user
    })
  )
}
