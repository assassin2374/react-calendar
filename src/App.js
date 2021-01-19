import { useState } from 'react';
import './App.css';
import React from 'react';

const sampleData=[
  {
    mon:1,
    day:17,
  },
  {
    mon:1,
    day:18,
  },
  {
    mon:1,
    day:19,
  }
];

// const month(()=>{
//   const day=31;
//   push
//   console.log(day);
// });

const App = () => {
  const [ymdData, setYmdData] = useState(sampleData)

  return (
    <div>
      <div>{ymdData[0].mon}</div>
      {ymdData.map((dayLoop)=>{
        return(
          <div>{dayLoop.day}</div>
        )
      })}
    </div>
  );
}

export default App;
