import axios from 'axios'

export const login = ({username, password}) =>
  axios.post(`${process.env.REACT_APP_API}/login`, {username, password})
  .then(({data: {token}}) => token)
  .catch(error => console.log(error))