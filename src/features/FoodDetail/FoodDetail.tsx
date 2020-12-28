import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fooddetailSelector } from 'selectors/food.selector'
import { asyncFetchFoodDetailData } from '../../actions/food.action'

function FoodDetail() {
  interface ParamTypes {
    id: string
  }
  const { id } = useParams<ParamTypes>()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncFetchFoodDetailData(id))
  }, [id])
  const food: any = useSelector(fooddetailSelector)
  return (
    <>
      {
        food && food.map((item: any) => (
          <>
            <div>
              <div>
                <span>Name:</span> <span>{item.name}</span>
              </div>
              <div>
                <span>Price:</span> <span>{item.price}</span>
              </div>
              <div>
                <span>Quantity:</span> <span>{item.quantity}</span>
              </div>
            </div>
            <img src={`${item.url}`} />
          </>
        ))
      }
    </>
  )
}

export default FoodDetail
