import React, { useEffect, useState } from 'react';

// react-router-dom
import { useParams } from 'react-router-dom';

// apis
import * as apiFood from 'apis/food.api';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateFood } from 'actions/food.action'
import { setDialog } from 'selectors/app.selector'
import { fooddetailSelector } from 'selectors/food.selector'
import { asyncFetchFoodDetailData, actNewFoodDataUpdate } from '../../actions/food.action'
import { actSetDialog } from 'actions/app.action'

import { Button, FormControl, TextField } from "@material-ui/core"

// types
import { IFoodData } from 'models/IFood';

interface ParamTypes {
  id: string
}

function FoodDetail() {
  const dispatch = useDispatch()
  const { id } = useParams<ParamTypes>()
  const [food, setFood] = useState<IFoodData | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [newFood, setNewFood] = useState({
    id
  });

  useEffect(() => {
    async function fetchFood() {
      const { data } = await apiFood.fetchFood(id);
      setFood(data);
    }
    fetchFood();
  },[id])

  const _handleUpdateFood = (id: number) => () => {
    if(disabled) {
      setDisabled(false);
      return;
    }
    dispatch(asyncUpdateFood(id, newFood))
  }
 
  function checkURL(url?: string) {
    return (url?.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  function _handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target;
    setNewFood({
      ...newFood,
      [name]: value
    })
  }

  return (
    <>
      {food && Object.values(food).length > 0 ? (
        <FormControl>
          <div>
            <span>Name:</span> <span>
              <TextField
                name="name"
                onChange={_handleOnChange}
                disabled={disabled}
                id="outlined-disabled"
                defaultValue={food.name}
              />
            </span>
          </div>
          <div>
            <span>Price:</span> <span>
              <TextField
                name="price"
                onChange={_handleOnChange}
                disabled={disabled}
                id="outlined-disabled"
                defaultValue={food.price}
              /> $
              </span>
          </div>
          <div>
            <span>Quantity:</span>
            <TextField
              name="quantity"
              onChange={_handleOnChange}
              disabled={disabled}
              id="outlined-disabled"
              defaultValue={food.quantity}
            />
          </div>
          <div>
            <span>Image url:</span>
            <TextField
              name="url"
              onChange={_handleOnChange}
              disabled={disabled}
              id="outlined-disabled"
              defaultValue={food.url}
            />
          </div>
          <img className="image_food" src={checkURL(food.url) ? food.url : "https://shareprogramming.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"} alt="Food" />

          <Button onClick={ _handleUpdateFood(food.id)}>{disabled ? "Edit" : "Accept"}</Button>
        </FormControl>
      ) : null}
    </>
  )
}

export default FoodDetail;
