import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';

export const Room = () => {

  const [roomid,setRoomid] = useState('')
  const navigate = useNavigate();

  const handlesunmit = (e)=>{
    e.preventDefault();
    navigate(`/videocall/${roomid}`)
  }

  const[currenttime,setCurrenttime] = useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrenttime(new Date());
    },1000);

    return ()=> clearInterval(timer);
  },[]);

  const formattime = (hour)=>{
    return hour===0 ? 12 : hour>12 ? hour-12 : hour;
  }

  const formattimezero = (num)=>{
    return num<10 ? `0${num}` : num;
  }

  const formatdate = (date)=>{
    const options = {weekday : 'short' , day : 'numeric' , month : 'short'}
    return date.toLocaleDateString(undefined,options);
  }

  return (
    <div className='pt-3'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between' >
        <div className='header-left d-flex'>
        <div className='googlemeetpic'>
         <img src={require('./images/google meet.png')} alt="" />
       </div>
       <div className='meet ps-2'>
        <p>Meet</p>
       </div>
      </div>

      <div className='header-right d-flex'>
      <div className='date'>
        <p>{formattimezero(formattime(currenttime.getHours()))}:{formattimezero(currenttime.getMinutes())} . {formatdate(currenttime)}</p>
      </div>

      <div className='support ps-4'>
       <i class="bi bi-question-circle"></i>
      </div>

      <div className='report ps-4'>
       <i class="bi bi-flag"></i>
      </div>

      <div className='settings ps-4'>
       <i class="bi bi-gear"></i>
      </div>

      <div className='apps'>
       <i class="bi bi-three-dots-vertical"></i>
      </div>

      <div className='profilepic ps-4'>
          <img src={require('./images/profilepic.png')} alt="" />
      </div>
      </div>
        </div>      
      </div>

      <div className='container center-content'>
      <div className='row'>
          <div className='col-lg-6 d-flex align-items-center'>
          <div className='left-content'>
        <div className='heading'>
          <h1>Video Calls and meetings for everyone</h1>
        </div>

        <div className='p pt-3 col-lg-10'>
          <p>Google meet provides secure, easy-to-use video calls and meetings for everyone, on any device.</p>
        </div>

        <div className='videocall-join pt-4 pb-5'>
         <form onSubmit={handlesunmit}>
          <div className='d-flex'>
            <div className='video'>
             <i class="bi bi-camera-video video-icon"></i>
             <button className='meeting'>New meeting</button>
            </div>

            <div className='entercode'>
             <i class="bi bi-keyboard keyboard"></i>
             <input className='codebox' type='number' placeholder='Enter the code ' value={roomid} onChange={(event)=>setRoomid(event.target.value)}></input>
            </div>

            <div className='join'>
            <button>Join</button>
            </div>
          </div>

          
          
        </form>
        </div>

        <div className='learn pt-4'>
          <p><span className='text-primary'>Learn more</span> about Google Meet</p>
        </div>
        </div>
          </div>

          <div className='col-lg-6'>
          <div className='right-content'>
        <div className='d-flex linkimage'>
          <div className='left-arrow pe-5'>
           <i class="bi bi-chevron-left"></i>
          </div>

          <div className='image-1'>
            <img src={require('./images/link image 1.png')} alt="" />
          </div>

          <div className='right-arrow ps-5'>
           <i class="bi bi-chevron-right"></i>
          </div>
        </div>

        <div className='pt-5 text-center getlink'>
          <h5 className='fs-4'>Get a link that you can share</h5>
        </div>

        <div className='pt-3 text-center click'>
          <p>Click <span className='fw-bold'>New meeting</span> to get a link that you can send to people that you want to meet with</p>
        </div>
        </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
