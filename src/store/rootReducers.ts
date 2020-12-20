import { combineReducers } from 'redux'

import UserReducer from './user/reducer'
import AuthReducer from './auth/reducer'

const FoodOnline = combineReducers({
  User: UserReducer,
  Auth: AuthReducer
})
export default FoodOnline