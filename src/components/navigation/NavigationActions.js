import store from '../../utils/store'

export const SET_SELECTED_ROUTE = 'SET_SELECTED_ROUTE'

export const setSelectedRoute = pathname => store.dispatch({
  type: SET_SELECTED_ROUTE,
  pathname
})