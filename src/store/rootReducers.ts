import { combineReducers } from 'redux'

import UserReducer from "./user/reducer";
import AuthReducer from "./auth/reducer";

const FoodOnline = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
})

export default FoodOnline;
