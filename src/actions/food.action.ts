import { Dispatch } from 'redux'

import { httpRequest } from 'services';
import { actSetDialog } from './app.action';

import { AlertType } from 'models/IRoute'
import { actShowNotification, actHideNotification } from 'actions/notification.action'

const nameSpace = 'food:';

export const FETCH_ALL_DATA_FOODS = `${nameSpace}FETCH_ALL_DATA_FOODS`
export const GET_FOOD_DETAIL_BY_ID = `${nameSpace}GET_FOOD_DETAIL_BY_ID`
export const GET_NEW_DATA_FOOD_UPDATE = `${nameSpace}GET_NEW_DATA_FOOD_UPDATE`
export const UPDATE_FOOD_DETAIL_SUCCESS = `${nameSpace}UPDATE_FOOD_DETAIL_SUCCESS`
export const UPDATE_FOOD_DETAIL_FAIL = `${nameSpace}UPDATE_FOOD_DETAIL_FAIL`

type FOODS = {
  foods: any
}
type FOOD = {
  food: any,
}

// food update 
export const actNewFoodDataUpdate = (id: number, data: any) => ({
  type: GET_NEW_DATA_FOOD_UPDATE,
  payload: {
    data,
    id
  }
})

// get all foods
export const actFetchFoodData = ({ foods }: FOODS) => {
  return {
    type: FETCH_ALL_DATA_FOODS,
    payload: foods
  }
}

export const asyncFetchFoodData = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.get(`/foods`);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Food not found'
        }
      }
      const foods = response.data;
      dispatch(actFetchFoodData({ foods }))
      return {
        ok: true,
        res: foods
      }
    } catch (err) {
      return { ok: false, res: "Error. Please try again.." }
    }
  }
}


// get food detail by id 
export const actGetFoodDetailData = ({ food }: FOOD) => ({
  type: GET_FOOD_DETAIL_BY_ID,
  payload: food
})
export const asyncFetchFoodDetailData = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.get(`/foods/${id}`);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Food not found'
        }
      }
      const food = response.data;
      dispatch(actGetFoodDetailData({ food }))
      return {
        ok: true,
        res: food
      }
    } catch (err) {
      return { ok: false, res: "Error. Please try again.." }
    }
  }
}

// update food 
export const actUpdateFoodSucess = (food: any) => ({
  type: UPDATE_FOOD_DETAIL_SUCCESS,
  payload: {
    food,
  }
})

export const actUpdateFoodFail = (error: string) => ({
  type: UPDATE_FOOD_DETAIL_FAIL,
  payload: {
    error,
  }
})

export const asyncUpdateFood = ({
  food, cb,
}: any) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await httpRequest.put(`/foods/${food.id}`, JSON.stringify(food));
      if (response.data === {}) {
        throw new Error('Update food fail')
      }
      const result = response.data;
      dispatch(actUpdateFoodSucess(result));
      const type = AlertType.success
      const isContent: string = "Your food updated successful.."
      var isShow = true
      dispatch(actShowNotification({ type, isContent, isShow }))
      setTimeout(() => {
        // isHide = false
        dispatch(actHideNotification())
      }, 5000)
    }
    catch (err) {
      dispatch(actUpdateFoodFail(err.message));
      // you can use callback function to call a function inside or dispatch a action
      // cb();
    }
    dispatch(actSetDialog(false, "", ""))
  }
}