import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const App = () => {
    let [time,setTime]=useState("");
    var date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let amOrpm="AM";
    if(hr>12){
        hr=hr-12;
        amOrpm="PM";
    }
    if(amOrpm==="PM" && hr>12){
        hr=hr-12;
    }
    let interval;

    const updateTime = () =>{
        sec=Number(sec)+1;
        if(sec===60){
            sec=0;
            min=Number(min)+1;
            if(min===60){
                min=0;
                hr=Number(hr)+1;
                if(hr>12 && amOrpm==="AM"){
                    hr=hr-12;
                    amOrpm="PM";
                }else if(hr===0 && amOrpm==="PM") amOrpm="AM";
            }
        }
        if(min<10) min="0"+Number(min);
        if(sec<10) sec="0"+Number(sec);
        setTime(hr+":"+min+":"+sec+" "+amOrpm);
    }

    useEffect(()=>{
        if(min<10) min="0"+Number(min);
        if(sec<10) sec="0"+Number(sec);
        setTime(hr+":"+min+":"+sec+" "+amOrpm);
        interval=setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        };
    },[]);
    return (
        <div className="Clock">
            <h3 id="time">{time}</h3>
        </div>
    );
};

export default App;
