import { useEffect, useState } from 'react';
import './Schedule.css';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const Schedule = () => {
  const id = parseInt(useParams().id);
  const [scheduleList, setScheduleList] = useState([]);
  const history = useHistory();
  const emptySchedule = {
    "user_id": 1,
    "year": 2021,
    "month": 1,
    "day": 24,
    "contents": "振替休日"
  };
  const [schedule, setSchedule] = useState(emptySchedule)

  useEffect(()=>{
    const getSchedule=async ()=>{
      const response = await axios.get(`http://localhost:4000/${id}`);
      setSchedule(response.data)
    };
    getSchedule();
  }, [id, setSchedule]);

  const changeContents=(e)=>{
    const newSchedule = Object.assign({},schedule);
    newSchedule.contents=e.target.value;
    console.log(newSchedule);
    setSchedule(newSchedule);
  }

  const clickedSave=async()=>{
    if(schedule.contents==='')return;
    const newScheduleList = scheduleList.slice();

    const newSchedule = newScheduleList.find((schedule)=>schedule.id===id);
    await axios.put(`http://localhost:4000${id}`, newSchedule);

    setScheduleList(newScheduleList);
    history.push('/');
  }

  return (
    <div>
      <h1>
        {schedule.year}/{schedule.month}/{schedule.day}
      </h1>
      <div>{schedule.contents}</div>
      <input type='text' value={schedule.contents} onChange={changeContents}/>
      <button onClick={clickedSave}>変更</button>
      <button onClick={()=> history.push('/')}>追加</button>
      <button onClick={()=> history.push('/')}>削除</button>
    </div>
  )
}

export default Schedule
