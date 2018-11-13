import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'

class CollectionPointList extends React.Component {
  state = {
    page: 1,
    rowsPerPage: 50
  }
  componentDidMount () {
    const { fetchCollectionPointList } = this.props
    fetchCollectionPointList()
  }
  render () {
    const { page, rowsPerPage } = this.state
    const { collectionPointList } = this.props
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            collectionPointList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(({id, nome}) => {
            return (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell>{nome}</TableCell>
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
    )
  }
}

export default CollectionPointList