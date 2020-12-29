import { FETCH_ALL_DATA_FOODS, GET_FOOD_DETAIL_BY_ID, GET_NEW_DATA_FOOD_UPDATE, UPDATE_FOOD_DETAIL_FAIL, UPDATE_FOOD_DETAIL_SUCCESS } from "../actions/food.action";
import { Action } from '../models/IRoute'
import { IFoodState } from '../models/IRootState'


const initState: IFoodState = {
  listfood: null,
  food: null,
  newFood: null,
  foodId: null
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
    case GET_NEW_DATA_FOOD_UPDATE:
      return {
        ...state,
        newFood: action.payload.data,
        foodId: action.payload.id
      }

    case UPDATE_FOOD_DETAIL_SUCCESS:
      console.log('action.payload', action.payload)
      return {
        ...state,
        food: action.payload.food,
      }
    case UPDATE_FOOD_DETAIL_FAIL:
      console.log('UPDATE_FOOD_DETAIL_FAIL action.payload', action.payload)
      return { ...state }
    // const fakedata: any = state.listfood
    // const index = fakedata.findIndex((item: any) => item.id === action.payload.id)
    // fakedata[index] = action.payload.food
    // return {
    //   ...state,
    //   listfood: fakedata,
    //   food: [action.payload.food]
    // }
    default:
      return state;
  }
}