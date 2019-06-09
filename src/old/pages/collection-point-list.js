import React from 'react'
// import { connect } from 'react-redux'

import CollectionPointList from '../components/collection-point-list/CollectionPointsList'

const CollectionPointListPage = ({user: {colletta}}) => (
  colletta
    ? <CollectionPointList colletta={colletta}/>
    : <div />
)

// const mapStateToProps = ({user}) => ({user})

// const mapDispatchToProps = null

export default CollectionPointListPage
