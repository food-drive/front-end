import routes, {routesIds}  from '../routes/routes-list'

const includeInNavigation = [
  routesIds.home,
  routesIds.collectionPointList,
  routesIds.teamLeader,
  routesIds.reports
]

const navigation = routes.filter(({id}) => includeInNavigation.includes(id))

const reducer = (state = navigation, action) => {
  return state
}

export default reducer
