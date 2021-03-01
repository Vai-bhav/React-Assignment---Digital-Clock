import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    }
    this.dateFunction = this.dateFunction.bind(this);
  }

  dateFunction() {
    let date = new Date();
    let updateHour = date.getHours();
    let updateMinute = date.getMinutes();
    let updateSecond = date.getSeconds();
    let updateAMPM = updateHour < 12 ? 'AM' : 'PM';
    updateHour=updateHour>12 ? updateHour-12: updateHour;
    if(updateMinute < 10) updateMinute = `0${updateMinute}`;
    if(updateSecond < 10) updateSecond = `0${updateSecond}`;
    let updateTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`;
    this.setState({time: updateTime});
  }

  componentDidMount() {
    this.loadInterval = setInterval(this.dateFunction, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.loadInterval);
  }

  render() {
    return(
      <>
        <div className="Clock">
          <h3 id="time">{this.state.time}</h3>
        </div>
      </>
    )
  }
}

 

export default App;

// import React,{ useState, useEffect } from 'react';
// import '../styles/App.css';

// const App = () => {
//     const [time,setTime]=useState(new Date().toLocaleTimeString());
//     const updateTime = () =>{
//         let date = new Date();
//         let updateHour = date.getHours();
//         let updateMinute = date.getMinutes();
//         let updateSecond = date.getSeconds();
//         let updateAMPM = updateHour < 12 ? 'AM' : 'PM';
//         updateHour=updateHour>12 ? updateHour-12: updateHour;
//         if(updateMinute < 10) updateMinute = `0${updateMinute}`;
//         if(updateSecond < 10) updateSecond = `0${updateSecond}`;
//         let updatedTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`;
//         setTime(updatedTime);
//     }
//     useEffect(()=>{
//         const interval=setInterval(updateTime,1000);
//         return () =>{
//             clearInterval(interval);
//         }
//     },[])
//     return (
//         <div className="Clock">
//             <h3 id="time">{time}</h3>
//         </div>
//     );
// };

// export default App;














// import React, { useEffect, useState } from 'react';
// import '../styles/App.css';

// const App = () => {
//     let [time,setTime]=useState("");
//     var date=new Date();
//     let hr=date.getHours();
//     let min=date.getMinutes();
//     let sec=date.getSeconds();
//     let amOrpm="AM";
//     if(hr>12){
//         hr=hr-12;
//         amOrpm="PM";
//     }
//     if(amOrpm==="PM" && hr>12){
//         hr=hr-12;
//     }
//     let interval=0;

//     const updateTime = () =>{
//         sec=Number(sec)+1;
//         if(sec===60){
//             sec=0;
//             min=Number(min)+1;
//             if(min===60){
//                 min=0;
//                 hr=Number(hr)+1;
//                 if(hr>12 && amOrpm==="AM"){
//                     hr=hr-12;
//                     amOrpm="PM";
//                 }else if(hr===0 && amOrpm==="PM") amOrpm="AM";
//             }
//         }
//         if(min<10) min="0"+Number(min);
//         if(sec<10) sec="0"+Number(sec);
//         setTime(hr+":"+min+":"+sec+" "+amOrpm);
//     }

//     useEffect(()=>{
//         if(min<10) min="0"+Number(min);
//         if(sec<10) sec="0"+Number(sec);
//         setTime(hr+":"+min+":"+sec+" "+amOrpm);
//         interval=setInterval(updateTime, 1000);
//         return () => {
//             clearInterval(interval);
//         };
//     });
//     return (
//         <div className="Clock">
//             <h3 id="time">{time}</h3>
//         </div>
//     );
// };

// export default App;