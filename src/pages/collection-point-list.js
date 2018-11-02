import React from 'react'
import {withLanguage} from '../utils/hocs'

const CollectionPointList = ({language: {pages: {collectionPointList}}}) => (
  <div>{collectionPointList.title}</div>
)

export default withLanguage(CollectionPointList)
