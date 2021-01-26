import { useState, useEffect } from 'react';
import './Calendar.css';
import { useHistory } from "react-router-dom";
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

const Calendar = () => {
  const [schedules, setSchedules] = useState([]);
  const [user, setUser] = useState(sampleUser);

  const history = useHistory();

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
            <div schedule={schedule} key={schedule.id} onClick={()=> history.push(`/schedule/${schedule.id}`)}>
              {schedule.year}/{schedule.month}/{schedule.day}/{schedule.contents}
            </div>
        )
      })}
    </div>
  );
};

export default Calendar;