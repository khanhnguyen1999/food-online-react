import { combineReducers } from 'redux'

import UserReducer from "../reducers/user.reducer";
import AuthReducer from "../reducers/auth.reducer";
import AppReducer from '../reducers/app.reducer';
import FoodReducer from '../reducers/food.reducer'
import NotifyReducer from 'reducers/notification.reducer'

const FoodOnline = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  app: AppReducer,
  food: FoodReducer,
  notify: NotifyReducer
})

export default FoodOnline;
