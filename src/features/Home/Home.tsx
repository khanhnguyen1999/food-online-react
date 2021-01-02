import React, { PureComponent, useState, useEffect } from 'react'

// recharts
// import {
//   BarChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// selector
import { useSelector } from 'react-redux'
import { listfoodSelector } from 'selectors/food.selector'

function Home() {
  const food: any = useSelector(listfoodSelector)
  const [data, setData] = useState([])
  useEffect(() => {
    setData(food)
  }, [food])
  return (
    <div>

    </div>
  )
}

export default Home
