import store from '../../utils/store'

import { login } from '../../utils/apis'

export const LOGIN = 'LOGIN'

export const loginAction = ({username, password}) => {
  login({username, password})
  .then(token => store.dispatch({
      type: LOGIN,
      token
    })
  )
}
