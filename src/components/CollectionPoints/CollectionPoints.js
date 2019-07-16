import React, {
  useEffect, useContext, useReducer, useState,
} from 'react';
import {
  getCollectionPoints,
} from '../../utils/apis';

import MainContext from '../../Contexts/MainContext';

import reducer from './collectionPointsReducer';
import { FETCH_COLLECTION_POINTS } from './collectionPointsActions';

import Table from '../Table';

const CollectionPointList = () => {
  const [collectionPoints, dispatch] = useReducer(reducer, []);
  const [columns] = useState([
    {
      headerName: 'Id', field: 'id',
    },
    {
      headerName: 'Nome', field: 'name', filter: true,
    }, {
      headerName: 'Indirizzo', field: 'address', filter: true,
    }, {
      headerName: 'Citta`', field: 'city.name', filter: true,
    }, {
      headerName: 'Provincia', field: 'city.province.name', filter: true,
    }, {
      headerName: 'Catena', field: 'chain.name', filter: true,
    },
    {
      headerName: 'Kg', field: 'kg',
    },
    {
      headerName: 'Scatole', field: 'boxes',
    },
  ]);
  const { user, events } = useContext(MainContext);
  const { state: eventList } = events;

  useEffect(() => {
    const { state: { idArea } } = user;
    async function fetchCollectionPoints() {
      const collectionPointsData = await getCollectionPoints({
        idEvent: eventList.find(({ active }) => active).id,
        idArea,
      });
      dispatch({ type: FETCH_COLLECTION_POINTS, collectionPoints: collectionPointsData });
    }
    fetchCollectionPoints();
  }, [user, eventList]);

  return (
    <Table
      columnDefs={columns}
      rowData={collectionPoints}
    />
  );
};

export default CollectionPointList;
