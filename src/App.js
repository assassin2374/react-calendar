import './App.css';
import React from 'react';

const ymdData=[
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
  return (
    <div>
      {ymdData.map((dayLoop)=>{
        return(
          <div>{dayLoop.mon}/{dayLoop.day}</div>
        )
      })}
    </div>
  );
}

export default App;
