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
      return data.supermercati
    })

export const getCities = () => Promise.resolve(cities.comuni)

export const getChains = () =>
  axios.post(`${process.env.REACT_APP_API}/get/catene`, {})
    .then(({data}) => {
      return data.catene
    })