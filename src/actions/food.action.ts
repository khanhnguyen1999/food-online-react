import axios from 'axios'
import { Dispatch } from 'redux'
import { actLoginSuccess } from './auth.action'


import { httpRequest, authService } from 'services';

const nameSpace = 'food:';

export const FETCH_ALL_DATA_FOODS = `${nameSpace}FETCH_ALL_DATA_FOODS`
export const GET_FOOD_DETAIL_BY_ID = `${nameSpace}GET_FOOD_DETAIL_BY_ID`

type FOODS = {
  foods: any
}
type FOOD = {
  food: any
}

type RegisterDataType = {
  email: string,
  firstname: string,
  lastname: string,
  gender: string,
  language: string,
  token: string
}


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
      const response = await httpRequest.get(`/foods?id=${id}`);
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