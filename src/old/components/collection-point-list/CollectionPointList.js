import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import { Button } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit'
import ListIcon from '@material-ui/icons/List'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    tableLayout: 'auto',
    width: 'auto'
  },
  idCell: {
    width: '10%'
  }
})

class CollectionPointList extends React.Component {
  state = {
    page: 1,
    rowsPerPage: 50
  }
  componentDidMount () {
    const { fetchCollectionPointList, colletta, user } = this.props
    fetchCollectionPointList({idColletta: colletta.id, idArea: [user.id_area]})
  }
  render () {
    const { page, rowsPerPage } = this.state
    const { classes, collectionPointList } = this.props
    return (
      <Paper className={classes.root}>
        <Table fixedHeader={false} className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.idCell}>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Comune</TableCell>
              <TableCell>Provincia</TableCell>
              <TableCell>Catena</TableCell>
              <TableCell>Capo Equipe</TableCell>
              <TableCell>Azioni</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              collectionPointList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({id_supermercato, nome, comune, provincia, catena, teamLeader}) => {
              return (
                <TableRow key={id_supermercato}>
                  <TableCell className={classes.idCell}>{id_supermercato}</TableCell>
                  <TableCell>{nome}</TableCell>
                  <TableCell>{comune}</TableCell>
                  <TableCell>{provincia}</TableCell>
                  <TableCell>{catena}</TableCell>
                  <TableCell>{teamLeader}</TableCell>
                  <TableCell>
                    <Button size="small">
                      <EditIcon fontSize="small"/>
                    </Button>
                    <Button size="small">
                      <ListIcon fontSize="small"/>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TablePagination
              component="div"
              count={collectionPointList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
            />
          </TableFooter>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(CollectionPointList)