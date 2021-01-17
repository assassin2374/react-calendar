import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const ymdData=[
  {
    day:1,
  },
  {
    day:2,
  },
  {
    day:3,
  }
];

// const month(()=>{
//   const day=31;
//   push
//   console.log(day);
// });

ReactDOM.render(
  <React.StrictMode>
    <div>1/17</div>
    <div>{ymdData}</div>
  </React.StrictMode>,
  document.getElementById('root')
);
