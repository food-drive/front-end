import store from '../../utils/store'

import { getCollectionPoints, getChains, getCities, getTeamLeaders, getTeamLeadersSupermercati } from '../../utils/apis'

export const FETCH_COLLECTION_POINT_LIST = 'FETCH_COLLECTION_POINT_LIST'
export const FETCH_CHAINS = 'FETCH_CHAINS'
export const FETCH_CITIES = 'FETCH_CITIES'
export const FETCH_TEAM_LEADERS = 'FETCH_TEAM_LEADERS'
export const FETCH_TEAM_LEADERS_SUPERMERCATI = 'FETCH_TEAM_LEADERS_SUPERMERCATI'

export const fetchCollectionPointList = () => {
  const { collectionPointList } = store.getState()
  if (!collectionPointList.length) {
    getCollectionPoints()
    .then(collectionPointList => store.dispatch({
      type: FETCH_COLLECTION_POINT_LIST,
      collectionPointList
    }))
    .then(() => {
      getCities()
      .then(cities => store.dispatch({
        type: FETCH_CITIES,
        cities
      }))
      getChains()
      .then(chains => store.dispatch({
        type: FETCH_CHAINS,
        chains
      }))

      getTeamLeadersSupermercati()
      .then(teamLeadersSupermercati => store.dispatch({
        type: FETCH_TEAM_LEADERS_SUPERMERCATI,
        teamLeadersSupermercati
      }))
      .then(getTeamLeaders())
      .then(teamLeaders => store.dispatch({
        type: FETCH_TEAM_LEADERS,
        teamLeaders
      }))
    })
  }
}