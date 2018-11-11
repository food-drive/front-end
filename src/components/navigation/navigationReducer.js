import routes, {routesIds}  from '../routes/routes-list'

import { SET_SELECTED_ROUTE } from './NavigationActions'

console.log(routes, routesIds)

const includeInNavigation = [
  routesIds.home,
  routesIds.collectionPointList,
  routesIds.teamLeader,
  routesIds.reports
]

const navigation = routes.filter(({id}) => includeInNavigation.includes(id))

const reducer = (state = navigation, action) => {
  const {type, pathName} = action
  if (type === SET_SELECTED_ROUTE) {
    return state.map(({path, ...route}) => ({
      ...route,
      path,
      selected: path === pathName
    }))
  }
  return state
}

export default reducer
