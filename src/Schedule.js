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
    <div>
      <div>
        {schedule.year}/{schedule.month}/{schedule.day}/{schedule.contents}
      </div>
      <input type='text' value={schedule.contents}/>
      <button onClick={()=> history.push('/')}>追加</button>
      <button onClick={()=> history.push('/')}>削除</button>
    </div>
  )
}

export default Schedule
