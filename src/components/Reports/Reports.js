import React, {
  useEffect, useContext, useReducer, useState, useMemo,
} from 'react';
import {
  getReport,
} from '../../utils/apis';

import MainContext from '../../Contexts/MainContext';

import reducer from './reportsReducer';
import FETCH_REPORTS from './reportsActions';

import Table from '../Table';

const toolbarOptions = [
  {
    type: 'download',
    options: {
      title: 'Report',
    },
  },
];

const defaultColumns = [{
  headerName: 'Provincia',
  field: 'city.province.name',
  filter: true,
  order: 'desc',
  align: 'left',
  comparator: (a, b) => (
    (b.city.province.name < a.city.province.name && 1)
    || (b.city.province.name > a.city.province.name && -1)
    || 0
  ),
}, {
  headerName: 'Nome', field: 'name',
}, {
  headerName: 'Indirizzo', field: 'address',
}, {
  headerName: 'Citta`', field: 'city.name',
}];

const Reports = () => {
  const [report, dispatch] = useReducer(reducer, []);
  const [columns, setColumns] = useState();
  const { user, events } = useContext(MainContext);
  const { state: eventList } = events;
  const activeEvent = useMemo(() => eventList.find(({ active }) => active), [eventList]);

  useEffect(() => {
    const { state: { idArea } } = user;
    async function fetchReport() {
      const { data: reportData, header } = await getReport({
        idEvent: activeEvent.id,
        idArea,
      });
      dispatch({ type: FETCH_REPORTS, report: reportData });
      setColumns([
        ...defaultColumns,
        ...header,
      ]);
    }
    fetchReport();
  }, [user, eventList, activeEvent.id]);

  return (columns && (
    <Table
      columnDefs={columns}
      rowData={report}
      size="small"
      toolbarOptions={toolbarOptions}
      rowsPerPage={50}
    />
  )) || '';
};

export default Reports;
