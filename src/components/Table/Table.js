import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';

import {
  Paper,
  Button,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core';

import {
  arrayOf, object, number, string, oneOf, shape,
} from 'prop-types';

import FilterList from './FilterList';

import downloadCsv from '../../utils/downloadCsv';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 700,
    tableLayout: 'auto',
    width: 'auto',
  },
  tableBody: {
    overflowX: 'hidden',
  },
  idCell: {
    width: '10%',
  },
}));

const extractDataColumns = (columnDefs) => {
  const columns = columnDefs.filter(({ children }) => !children);
  columnDefs
    .filter(({ children }) => children)
    .forEach(({ children }) => children.forEach(child => columns.push(child)));
  return columns;
};

const getColumnRows = (cols) => {
  const haveChildren = (cols.find(({ children }) => children) && true) || false;
  const resCols = [
    cols.map(({
      headerName, field, colSpan, filter, align,
    }) => ({
      headerName, field, colSpan, filter, align,
    })),
  ];
  if (haveChildren) {
    resCols.push([]);
    cols.forEach(({ children = [{}] }) => {
      resCols[1].push(...children);
    });
  }
  return resCols;
};

const filterSet = ({ field, set }) => (row) => {
  const activeFilters = set.filter(({ checked }) => checked).map(({ value }) => value);
  return activeFilters.indexOf(row[field]) !== -1;
};

const createFiltersData = (cols, rows) => (cols.filter(({ filter }) => filter)
  .map(({ field }) => rows.reduce((filterCol, row) => {
    if (filterCol.set.indexOf(row[field]) === -1) {
      filterCol.set.push(row[field]);
    }
    return filterCol;
  }, { field, set: [] }))
  .map(({ field, set }) => ({
    field,
    set: set.map(value => ({ checked: true, value })),
  }))
);

const toolbarOptionsTypes = {
  download: 'download',
};

const getEmptyColsforCsv = (colSpan) => {
  if (colSpan > 1) {
    let quotes = '';
    for (let i = 0; i < colSpan - 1; i += 1) {
      quotes = `${quotes},""`;
    }
    return quotes;
  }
  return '';
};

const Table = ({
  columnDefs,
  rowData,
  toolbarOptions,
  page,
  rowsPerPage,
  size,
}) => {
  const [headerColumnRows] = useState(getColumnRows(columnDefs));
  const [dataColumns] = useState(extractDataColumns(columnDefs));
  const [filtersData, setFiltersData] = useState(createFiltersData(columnDefs, rowData));
  const [defaultSortingCol] = useState(columnDefs.find(({ order }) => order));
  const [currentPage, setCurrentPage] = useState(page);
  const classes = useStyles();
  const handleChangePage = useCallback((event, newPage) => {
    setCurrentPage(newPage);
  }, []);

  const csvData = useMemo(() => [
    ...headerColumnRows.map(columnRow => columnRow.map(({ headerName, colSpan }) => `${headerName}${getEmptyColsforCsv(colSpan)}`)),
    ...rowData.map(data => dataColumns.map(({ field }) => `"${field.split('.').reduce((val, key) => val[key], data)}"`)),
  ], [headerColumnRows, rowData, dataColumns]);

  const toolbarRenderer = useCallback(({ type, options }) => {
    const downloadButtonRenderer = ({ title }) => (
      <Button key={`${title}-${type}`} variant="contained" onClick={() => downloadCsv({ data: csvData, name: title })}>Download csv</Button>
    );

    switch (type) {
      case toolbarOptionsTypes.download:
        return downloadButtonRenderer(options);
      default:
        return '';
    }
  }, [csvData]);

  return (
    <Paper className={classes.root}>
      {
        toolbarOptions.length && (
          <Toolbar>
            {
              toolbarOptions.map(options => toolbarRenderer(options))
            }
          </Toolbar>
        )
      }
      <MuiTable className={classes.table} size={size}>
        <TableHead>
          {
            headerColumnRows.map((columnRow, i) => (
              <TableRow key={i}>
                {
                  columnRow.map(({
                    headerName, filter, colSpan = 1, align = 'center', field,
                  }, j) => (
                    <TableCell
                      variant="head"
                      key={j}
                      colSpan={colSpan}
                      align={align}
                    >
                      <Box display="flex">
                        <Typography variant="body1">
                          <Box fontWeight="bold" component="span">
                            {headerName}
                          </Box>
                        </Typography>
                        {
                          (filter && <FilterList colField={field} filterList={filtersData} setFilterList={setFiltersData} />)
                        }
                      </Box>
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableHead>
        <TableBody className={classes.tableBody}>
          {
            rowData
              .filter(row => filtersData.reduce((res, filter) => res && filterSet(filter)(row), true))
              .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
              .sort(defaultSortingCol.comparator)
              .map(data => (
                <TableRow key={data.id}>
                  {
                    dataColumns.map(({ field }) => (
                      <TableCell
                        variant="body"
                        key={field}
                        align="center"
                      >
                        <Typography variant="body1">
                          {field.split('.').reduce((val, key) => val[key], data)}
                        </Typography>
                      </TableCell>
                    ))
                  }
                </TableRow>
              ))
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              page={currentPage}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </MuiTable>
    </Paper>
  );
};

Table.propTypes = {
  columnDefs: arrayOf(object).isRequired,
  rowData: arrayOf(object).isRequired,
  toolbarOptions: arrayOf(shape({
    type: oneOf(Object.keys(toolbarOptionsTypes)),
  })),
  page: number,
  rowsPerPage: number,
  size: string,
};

Table.defaultProps = {
  toolbarOptions: [],
  page: 0,
  rowsPerPage: 20,
  size: 'medium',
};

export default Table;
