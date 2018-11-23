import React from 'react'
import { connect } from 'react-redux'

import CollectionPointList from '../components/collection-point-list/CollectionPointsListContainer'

const CollectionPointListPage = ({user: {colletta}}) => {
  return (
    <CollectionPointList />
  )
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPointListPage)
