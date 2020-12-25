import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from "./rootReducers";


const Store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


export {
  Store
};
