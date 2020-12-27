import { combineReducers } from 'redux'

import UserReducer from "./user/reducer";
import AuthReducer from "./auth/reducer";
import AppReducer from './app/reducer';

const FoodOnline = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  app: AppReducer
})

export default FoodOnline;
