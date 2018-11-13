import {
  FETCH_COLLECTION_POINT_LIST,
  FETCH_CHAINS,
  FETCH_CITIES,
} from './collectionPointListActions'

const flatten = collection => collection.reduce((obj, {id, ...rest}) => {
  obj[id] = rest
  return obj
}, {})

const reducer = (state = [], action) => {
  const {type, collectionPointList, cities, chains} = action
  switch (type) {
    case FETCH_COLLECTION_POINT_LIST:
      return collectionPointList
    case FETCH_CITIES: {
      const flattenCities = flatten(cities)
      return state.map(({id_comune, ...collectionPoint}) => ({
        ...collectionPoint,
        comune: flattenCities[id_comune].nome,
        provincia: flattenCities[id_comune].provincia
      }))
    }
    case FETCH_CHAINS: {
      const flattenChains = flatten(chains)
      return state.map(({id_catena, ...collectionPoint}) => ({
        ...collectionPoint,
        catena: flattenChains[id_catena].nome
      }))
    }
    default:
      return state
  }
}

export default reducer