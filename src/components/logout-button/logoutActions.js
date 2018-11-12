import store from '../../utils/store'

import { logout } from '../../utils/apis'

export const LOGOUT = 'LOGOUT'

export const logoutAction = () => {
  const {token} = store.getState().user
  logout()
  .then(store.dispatch({
      type: LOGOUT,
      token
    })
  )
}
