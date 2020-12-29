import { createSelector } from 'reselect';
import IRootState from 'models/IRootState';

export const listfoodSelector = createSelector(
  (state: IRootState) => state.food,
  (food) => food.listfood
)
export const fooddetailSelector = createSelector(
  (state: IRootState) => state.food,
  (food) => food.food
)
export const getNewFoodDataUpdate = createSelector(
  (state: IRootState) => state.food,
  (food) => food.newFood
)
export const getFoodId = createSelector(
  (state: IRootState) => state.food,
  (food) => food.foodId
)