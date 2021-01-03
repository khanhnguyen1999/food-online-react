import React, { useState } from 'react';

// components
import BarChart from 'components/ReCharts/BarChart';

function Home() {
  const [count, setCount] = useState<any>(1);
  return (
    <div>
      <BarChart />

      <h3>Demo react error boundary</h3>
      {count}
      <button type="button" onClick={() => {
        setCount({})
      }}>submit</button>
    </div>
  )
}

export default Home
