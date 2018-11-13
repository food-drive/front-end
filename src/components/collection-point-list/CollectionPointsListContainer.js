import { connect } from 'react-redux'

import CollectionPointList from './CollectionPointList'

import { fetchCollectionPointList } from './collectionPointListActions'

const mapStateToProps = ({ collectionPointList }) => ({ collectionPointList })

const mapDispatchToProps = () => ({
  fetchCollectionPointList: () => fetchCollectionPointList()
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPointList)
