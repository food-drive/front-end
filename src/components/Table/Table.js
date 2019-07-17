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
  IconButton,
} from '@material-ui/core';

import { FilterList } from '@material-ui/icons';

import {
  arrayOf, object, number, string, oneOf, shape,
} from 'prop-types';

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

const toolbarOptionsTypes = {
  download: 'download',
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
  const [defaultSortingCol] = useState(columnDefs.find(({ order }) => order));
  const [currentPage, setCurrentPage] = useState(page);
  const classes = useStyles();
  const handleChangePage = useCallback((event, newPage) => {
    setCurrentPage(newPage);
  }, []);

  const buildCsv = useMemo(() => [
    ...headerColumnRows.map(columnRow => columnRow.map(({ headerName }) => headerName)),
    ...rowData.map(data => dataColumns.map(({ field }) => `"${field.split('.').reduce((val, key) => val[key], data)}"`)),
  ], [headerColumnRows, rowData, dataColumns]);

  const downloadButtonRenderer = ({ title }) => (
    <Button variant="contained" onClick={() => downloadCsv({ data: buildCsv(), name: title })}>Download csv</Button>
  );

  const toolbarRenderer = useCallback(({ type, options }) => {
    switch (type) {
      case toolbarOptionsTypes.download:
        return downloadButtonRenderer(options);
      default:
        return '';
    }
  }, [
    toolbarOptionsTypes.download,
    downloadButtonRenderer,
  ]);

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
                    headerName, filter, colSpan = 1, align = 'center',
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
                          (filter && <IconButton><FilterList fontSize="small" /></IconButton>)
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
