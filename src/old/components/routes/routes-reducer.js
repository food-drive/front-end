import {
  SET_SELECTED_ROUTE
} from '../navigation/NavigationActions'

const reducer = (state, action) => {
  const {type, pathname} = action
  if (type === SET_SELECTED_ROUTE) {
    return state.map(({path, ...route}) => ({
      ...route,
      path,
      selected: path === pathname
    }))
  }
  return state
}

export default reducer
