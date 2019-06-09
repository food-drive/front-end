import React from 'react'
import { connect } from 'react-redux'

const CollectionPoint = ({user}) => (
  user
    ? <div>CollectionPoint</div>
    : <div/>
)

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPoint)