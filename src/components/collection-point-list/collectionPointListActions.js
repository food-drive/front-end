import store from '../../utils/store'

import { getCollectionPoints, getChains, getCities } from '../../utils/apis'

export const FETCH_COLLECTION_POINT_LIST = 'FETCH_COLLECTION_POINT_LIST'
export const FETCH_CHAINS = 'FETCH_CHAINS'
export const FETCH_CITIES = 'FETCH_CITIES'

export const fetchCollectionPointList = () => {
  const { collectionPointList } = store.getState()
  if (!collectionPointList.length) {
    getCollectionPoints()
    .then(collectionPointList => store.dispatch({
      type: FETCH_COLLECTION_POINT_LIST,
      collectionPointList
    }))
    .then(getCities)
    .then(cities => store.dispatch({
      type: FETCH_CITIES,
      cities
    }))
    .then(getChains)
    .then(chains => store.dispatch({
      type: FETCH_CHAINS,
      chains
    }))
  }
}