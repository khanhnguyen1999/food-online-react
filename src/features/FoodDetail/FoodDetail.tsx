import React, { useEffect, useState } from 'react';

// react-router-dom
import { useParams } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { setDialog } from 'selectors/app.selector'
import { fooddetailSelector } from 'selectors/food.selector'
import { asyncFetchFoodDetailData } from '../../actions/food.action'
import { actSetDialog } from 'actions/app.action'

import { Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';


function FoodDetail() {
  interface ParamTypes {
    id: string
  }


  const { id } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  const dialog = useSelector(setDialog)
  const [disabled, setDisabled] = useState(true)
  const food: any = useSelector(fooddetailSelector)

  // fetch all data foods 
  useEffect(() => {
    dispatch(asyncFetchFoodDetailData(id))
  }, [id])

  // when we accept dialog to update food -> form input will be disable
  useEffect(() => {
    if (!dialog.isShow) {
      setDisabled(true)
    }
  }, [dialog])

  const _handleUpdateFood = (name: string) => {
    if (disabled) {
      setDisabled(!disabled)
    }
    else {
      const isShow: boolean = true
      const type: string = "success"
      const content: string = `Are you sure to update ${name} food?`
      dispatch(actSetDialog(isShow, type, content))
    }
  }

  return (
    <>
      {
        food && food.map((item: any) => (
          <>
            <div>
              <div>
                <span>Name:</span> <span>
                  <TextField
                    disabled={disabled}
                    id="outlined-disabled"
                    defaultValue={item.name}
                  />
                </span>
              </div>
              <div>
                <span>Price:</span> <span>
                  <TextField
                    disabled={disabled}
                    id="outlined-disabled"
                    defaultValue={`${item.price}`}
                  /> $
                </span>
              </div>
              <div>
                <span>Quantity:</span>
                <TextField
                  disabled={disabled}
                  id="outlined-disabled"
                  defaultValue={item.quantity}
                />
              </div>
              <div>
                <span>Image url:</span>
                <TextField
                  disabled={disabled}
                  id="outlined-disabled"
                  defaultValue={item.url}
                />
              </div>
            </div>
            <img src={`${item.url}`} />
            <Button onClick={() => _handleUpdateFood(item.name)}>{disabled ? "Edit" : "Accept"}</Button>
          </>
        ))
      }
    </>
  )
}

export default FoodDetail
