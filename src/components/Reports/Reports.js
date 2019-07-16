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
      setColumns(header);
    }
    fetchReport();
  }, [user, eventList]);

  return (columns && (
    <Table
      columnDefs={columns}
      rowData={report}
      size="small"
      toolbarOptions={toolbarOptions}
    />
  )) || '';
};

export default Reports;
