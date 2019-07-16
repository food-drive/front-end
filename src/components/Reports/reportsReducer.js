
import FETCH_REPORT from './reportsActions';

// const flatten = collection => collection.reduce((obj, { id, ...rest }) => {
//   obj[id] = rest;
//   return obj;
// }, {});

// const groupBy = key => collection => collection.reduce((obj, el) => {
//   (obj[el[key]] = obj[el[key]] || []).push(el);
//   return obj;
// }, {});

const reducer = (state = [], action) => {
  const {
    type,
    report,
    // cities,
    // chains,
    // teamLeadersCollectionPointList,
    // teamLeaders,
  } = action;
  switch (type) {
    case FETCH_REPORT:
      return report;
    // case FETCH_CITIES: {
    //   const flattenCities = flatten(cities);
    //   return state.map(({ id_comune, ...collectionPoint }) => ({
    //     ...collectionPoint,
    //     comune: flattenCities[id_comune].nome,
    //     provincia: flattenCities[id_comune].provincia,
    //   }));
    // }
    // case FETCH_CHAINS: {
    //   const flattenChains = flatten(chains);
    //   return state.map(({ id_catena, ...collectionPoint }) => ({
    //     ...collectionPoint,
    //     catena: flattenChains[id_catena].nome,
    //   }));
    // }
    // case FETCH_TEAM_LEADERS_COLLECTION_POINT_LIST: {
    //   const groupedByIdCollectionPoint = groupBy('id_supermercato');
    //   const groupedTeamLeaders = groupedByIdCollectionPoint(teamLeadersCollectionPointList);
    //   return state.map(({ id_supermercato, ...collectionPoint }) => {
    //     const teamLeader = groupedTeamLeaders[id_supermercato];
    //     return {
    //       id_supermercato,
    //       ...collectionPoint,
    //       teamLeader: (teamLeader && teamLeader[0].id_capo_equipe) || '',
    //     };
    //   });
    // }
    // case FETCH_TEAM_LEADERS: {
    //   const flattenTeamLeaders = flatten(teamLeaders);
    //   return state.map(({ teamLeader, ...collectionPoint }) => ({
    //     ...collectionPoint,
    //     teamLeader: teamLeader && flattenTeamLeaders[teamLeader].nome,
    //   }),);
    // }
    default:
      return state;
  }
};

export default reducer;
