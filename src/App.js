import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import axios from 'axios';

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

const sampleUser=[
  {
    id:0,
    name:'matsumoto',
    pass:'passward'
  }
];

// const month(()=>{
//   const day=31;
//   push
//   console.log(day);
// });

const App = () => {
  const [schedules, setSchedules] = useState([]);
  const [user, setUser] = useState(sampleUser);

  useEffect(()=>{
    const getSchedule = async()=>{
      const response = await axios.get('http://localhost:4000');
      setSchedules(response.data);
    };
    getSchedule();
  }, [setSchedules]);

  return (
    <div>
      {schedules.map((schedule)=>{
        return(
          <div key={schedule.id}>{schedule.year}/{schedule.month}/{schedule.day}/{schedule.contents}</div>
        )
      })}
    </div>
  );
}

export default App;
