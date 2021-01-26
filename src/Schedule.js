import { useEffect, useState } from 'react';
import './Schedule.css';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const Schedule = () => {

  const id = parseInt(useParams().id);
  const [schedule, setSchedule] = useState([]);

  const history = useHistory();

  useEffect(()=>{
    const getSchedule=async ()=>{
      const response = await axios.get(`http://localhost:4000/${id}`);
      setSchedule(response.data)
    };
    getSchedule();
  }, [id, setSchedule]);

  return (
    <div onClick={()=> history.push('/')}>
      {schedule.year}/{schedule.month}/{schedule.day}/{schedule.contents}
    </div>
  )
}

export default Schedule
