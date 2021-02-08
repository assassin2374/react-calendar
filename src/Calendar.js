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
  const [scheduleList, setScheduleList] = useState([]);
  const [contents, setContents] = useState([]);
  const [ymdData, setYmdData] = useState([]);
  const [user, setUser] = useState(sampleUser);

  const history = useHistory();

  useEffect(()=>{
    const getScheduleList = async()=>{
      const response = await axios.get('http://localhost:4000');
      setScheduleList(response.data);
    };
    getScheduleList();
  }, [setScheduleList]);

  const addYmdData=(e)=>{
    setYmdData(e.target.value);
    let newYmdData = '';
    if(ymdData){
      newYmdData = ymdData.split('-');
    }
    console.log(newYmdData);
  }

  const addContents=(e)=>{
    setContents(e.target.value);
    console.log(contents);
  }
  
  const addSchedule=async()=>{
    if(contents==='')return;
    let newId = 0;
    if(scheduleList.length > 0){
      newId = Math.max(...scheduleList.map((todo)=>todo.id)) + 1;
    }
    const newScheduleList = scheduleList.slice();
    const newSchedule ={
      id:newId,
      user_id:1,
      year:2021,
      month:2,
      day:6,
      contents:contents,
    };

    await axios.post(`http://localhost:4000`, newSchedule);
    newScheduleList.push(newSchedule);

    setScheduleList(newScheduleList);
    setContents('');
  }

  return (
    <div>
      <div>schedule</div>
      <input type="date" value={ymdData} onChange={addYmdData}/>
      <div>
        <input type='text' value={contents} onChange={addContents}/>
        <button onClick={addSchedule}>追加</button>
      </div>
      <div>
        {scheduleList.map((schedule)=>{
          return(
            <div schedule={schedule} key={schedule.id} onClick={()=> history.push(`/schedule/${schedule.id}`)}>
              {schedule.year}/{schedule.month}/{schedule.day}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Calendar;