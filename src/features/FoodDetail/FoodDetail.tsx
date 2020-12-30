import React, { useEffect, useState } from 'react';

// react-router-dom
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setDialog } from 'selectors/app.selector'
import { fooddetailSelector, listfoodSelector } from 'selectors/food.selector'
import { asyncFetchFoodDetailData, actNewFoodDataUpdate, asyncFetchFoodData } from '../../actions/food.action'
import { actSetDialog } from 'actions/app.action'

import { Button, FormControl, TextField } from "@material-ui/core"


function FoodDetail() {
  interface ParamTypes {
    id: string
  }


  const { id } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  const dialog = useSelector(setDialog)
  const [disabled, setDisabled] = useState(true)
  const food: any = useSelector(fooddetailSelector)
  const listfood: any = useSelector(listfoodSelector)
  const [data, setData] = useState({})
  const [foodData, setFoodData] = useState(null)

  // fetch all data foods   
  useEffect(() => {
    dispatch(asyncFetchFoodData())
  }, [dispatch])
  useEffect(() => {
    dispatch(asyncFetchFoodDetailData(id))
  }, [id, dispatch, listfood])
  useEffect(() => {
    setFoodData(food)
  }, [food])

  // when we accept dialog to update food -> form input will be disable
  useEffect(() => {
    if (!dialog.isShow) {
      setDisabled(true)
    }
  }, [dialog])

  const _handleUpdateFood = (name: string, id: number) => {
    if (disabled) {
      setDisabled(!disabled)
    }
    else {
      const isShow: boolean = true
      const type: string = "success"
      const content: string = `Are you sure to update ${name} food?`
      dispatch(actNewFoodDataUpdate(id, data))
      dispatch(actSetDialog(isShow, type, content))
    }
  }

  function checkURL(url: string) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }
  const _handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fakeData: any = foodData;
    fakeData = {
      ...fakeData,
      [e.target.name]: e.target.value
    }
    setData(fakeData)
  }
  return (
    <>
      {
        food && (
          <FormControl key={food.id}>
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
                  defaultValue={`${food.price}`}
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
            <img alt={food.name} className="image_food" src={checkURL(food.url) ? food.url : "https://shareprogramming.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"} />
            <Button onClick={() => _handleUpdateFood(food.name, food.id)}>{disabled ? "Edit" : "Accept"}</Button>
          </FormControl>
        )
      }
    </>
  )
}

export default FoodDetail
