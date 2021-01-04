import { combineReducers } from 'redux'

import UserReducer from "../reducers/user.reducer";
import AuthReducer from "../reducers/auth.reducer";
import AppReducer from '../reducers/app.reducer';
import FoodReducer from '../reducers/food.reducer'
import TrelloReducer from '../reducers/trello.reducer'

const FoodOnline = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  app: AppReducer,
  food: FoodReducer,
  trello: TrelloReducer
})

export default FoodOnline;
