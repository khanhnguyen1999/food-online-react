import { FETCH_ALL_DATA_FOODS, GET_FOOD_DETAIL_BY_ID } from "../actions/food.action";
import { Action } from '../models/IRoute'
import { IFoodState } from '../models/IRootState'


const initState: IFoodState = {
  listfood: null,
  food: null
}

export default function FoodReducer(state = initState, action: Action) {
  switch (action.type) {
    case FETCH_ALL_DATA_FOODS:
      return {
        ...state,
        listfood: action.payload
      };
    case GET_FOOD_DETAIL_BY_ID:
      return {
        ...state,
        food: action.payload
      }
    default:
      return state;
  }
}