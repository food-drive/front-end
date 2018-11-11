import React from 'react'
import {withLanguage} from '../utils/hocs'

import NavigationPage from '../components/navigation/NavigationPage'

const CollectionPointList = ({language: {pages: {collectionPointList}}}) => (
  <NavigationPage>
    <div>{collectionPointList.title}</div>
  </NavigationPage>
)

export default withLanguage(CollectionPointList)
