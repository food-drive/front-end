import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import mainReducer from './main-reducer'

const store = createStore(mainReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )
)

export default store