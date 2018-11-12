import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import mainReducer from './main-reducer'

const store = createStore(mainReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

export default store