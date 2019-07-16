import axios from 'axios';
import cities from '../resources/comuni.json';

const headers = () => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const login = ({ username = '', password = '' }) => axios.post('/api/login', { username, password })
  .then(({ data: { token } }) => token);

export const logout = token => axios.get('/api/logout', { token });

export const getUser = () => axios.get('/api/userInfo', headers())
  .then(({ data }) => data);

export const getEvents = () => axios.get('/api/foodDrives', headers())
  .then(({ data }) => data);

export const getCollectionPoints = ({ idEvent, idArea }) => axios.get('/api/collectionPoints', {
  params: {
    idEvent,
    idArea,
  },
  ...headers(),
})
  .then(({ data }) => data);

export const getReport = ({ idEvent, idArea }) => axios.get('/api/report', {
  params: {
    idEvent,
    idArea,
  },
  ...headers(),
})
  .then(({ data }) => data);

export const getProductTypes = ({ idEvent }) => axios.get('/api/productTypes', {
  params: {
    idEvent,
  },
  ...headers(),
})
  .then(({ data }) => data);

export const getCities = () => Promise.resolve(cities.comuni);

export const getChains = () => axios.post('api/catene', headers())
  .then(({ data }) => data.catene);

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
