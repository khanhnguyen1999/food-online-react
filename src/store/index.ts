import { createStore, applyMiddleware } from 'redux'
import FoodOnline from './rootReducers'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
  FoodOnline,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(() => {
  console.log("Get state", store.getState())
})

export default store