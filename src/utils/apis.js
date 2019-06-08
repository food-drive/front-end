import axios from 'axios'
import cities from '../resources/comuni.json'

const headers = () => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
  return {
    headers: {'Authorization': "Bearer " + token}
  }
}

export const login = ({username, password}) =>
  axios.post('/api/login', {username, password})
  .then(({data: {token}}) => token)

export const logout = token =>
  axios.get('/api/logout', {token})

export const getUser = () =>
  axios.get('/api/userInfo', headers())
    .then(({data}) => {
      return data
    })

export const getEvents = () =>
  axios.get('/api/foodDrives', headers())
    .then(({data}) => {
      return data.map(({attiva, ...colletta}) => ({
        attiva: parseInt(attiva),
        ...colletta
      }))
    })

export const getCollectionPoints = params =>
  axios.get('/api/collectionPoints', {
    params,
    ...headers()
  })
    .then(({data}) => {
      return data.map(({id, id_supermercato, ...rest}) => ({
        id: parseInt(id),
        id_supermercato: parseInt(id_supermercato),
        ...rest
      }))
    })

export const getCities = () => Promise.resolve(cities.comuni)

// export const getChains = () =>
//   axios.post(getApiUrl('/get/catene'), {})
//     .then(({data}) => {
//       return data.catene
//     })

// export const getTeamLeadersCollectionPointList = () =>
//   axios.post(getApiUrl('/get/capi_equipe_supermercati'), {})
//     .then(({data}) => {
//       return data.capi_equipe_supermercati
//         .map(({id_supermercato, id_capo_equipe}) => ({
//           id_supermercato: parseInt(id_supermercato),
//           id_capo_equipe: parseInt(id_capo_equipe)
//         }))
//     })

// export const getTeamLeaders = () =>
//   axios.post(getApiUrl('/get/capi_equipe'), {})
//     .then(({data}) => {
//       return data.capi_equipe.map(({id, ...rest}) => ({
//         id: parseInt(id),
//         ...rest
//       }))
//     })