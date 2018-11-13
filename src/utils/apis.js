import axios from 'axios'
import cities from '../resources/comuni.json'

export const login = ({username, password}) =>
  axios.post(`${process.env.REACT_APP_API}/login`, {username, password})
  .then(({data: {token}}) => token)
  .catch(error => console.log(error))

export const logout = token =>
  axios.get(`${process.env.REACT_APP_API}/logout`, {token})

export const getUser = () =>
  axios.get(`${process.env.REACT_APP_API}/get/user`, {})
    .then(({data}) => {
      return data.user
    })

export const getEvents = () =>
  axios.post(`${process.env.REACT_APP_API}/get/colletta`, {})
    .then(({data}) => {
      return data.colletta.map(({attiva, ...colletta}) => ({
        attiva: parseInt(attiva),
        ...colletta
      }))
    })

export const getCollectionPoints = () =>
  axios.post(`${process.env.REACT_APP_API}/get/supermercati`, {})
    .then(({data}) => {
      return data.supermercati.map(({id, id_supermercato, ...rest}) => ({
        id: parseInt(id),
        id_supermercato: parseInt(id_supermercato),
        ...rest
      }))
    })

export const getCities = () => Promise.resolve(cities.comuni)

export const getChains = () =>
  axios.post(`${process.env.REACT_APP_API}/get/catene`, {})
    .then(({data}) => {
      return data.catene
    })

export const getTeamLeadersCollectionPointList = () =>
  axios.post(`${process.env.REACT_APP_API}/get/capi_equipe_supermercati`, {})
    .then(({data}) => {
      return data.capi_equipe_supermercati
        .map(({id_supermercato, id_capo_equipe}) => ({
          id_supermercato: parseInt(id_supermercato),
          id_capo_equipe: parseInt(id_capo_equipe)
        }))
    })

export const getTeamLeaders = () =>
  axios.post(`${process.env.REACT_APP_API}/get/capi_equipe`, {})
    .then(({data}) => {
      return data.capi_equipe.map(({id, ...rest}) => ({
        id: parseInt(id),
        ...rest
      }))
    })