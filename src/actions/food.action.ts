import { Dispatch } from 'redux'

import { httpRequest } from 'services';

import { IPaginaition } from 'models/IPagination'

const nameSpace = 'food:';

export const FETCH_ALL_DATA_FOODS = `${nameSpace}FETCH_ALL_DATA_FOODS`
export const GET_FOOD_DETAIL_BY_ID = `${nameSpace}GET_FOOD_DETAIL_BY_ID`
export const GET_NEW_DATA_FOOD_UPDATE = `${nameSpace}GET_NEW_DATA_FOOD_UPDATE`
export const UPDATE_FOOD_DETAIL = `${nameSpace}UPDATE_FOOD_DETAIL`

type FOODS = {
  foods: any
}
type FOOD = {
  food: any,
}
type UPDATE_FOOD = {
  food: any,
  id: number
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


// update food 
export const actUpdateFood = ({ id, food }: UPDATE_FOOD) => ({
  type: UPDATE_FOOD_DETAIL,
  payload: {
    food,
    id
  }
})

export const asyncUpdateFood = (id: number, newFood: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.put(`/foods/${id}`, newFood);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Food not found'
        }
      }
      const food = response.data;
      dispatch(actUpdateFood({ id, food }))
      return {
        ok: true,
        res: food
      }
    }
    catch (err) {
      return { ok: false, res: "Error. Please try again.." }
    }
  }
}


// pagination pages 
export const asyncPaginationFoods = ({ rowsPerPage, page }: IPaginaition) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.get(`/foods?_page=${page + 1}&_limit=${rowsPerPage}`);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Food not found'
        }
      }
      return {
        ok: true,
        data: response.data
      }
    } catch (err) {
      return { ok: false, res: "Error. Please try again.." }
    }
  }
}

// search food 
export const asycnSearchFoods = (text: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await httpRequest.get(`/foods?name=${text}`);
      if (response.data.length === 0) {
        return {
          ok: false,
          res: 'Food not found'
        }
      }
      return {
        ok: true,
        data: response.data
      }
    } catch (err) {
      return { ok: false, res: "Error. Please try again.." }
    }
  }
}