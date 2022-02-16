import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Schedule from "./Schedule.js";

export default function BasicDatePicker() {
  const [setdate, setSetdate] = React.useState(new Date());
  const [active, setActive] = React.useState("new");

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {<br></br>}
      <DatePicker
        showTimeSelect
        label="Basic example"
        value={setdate}

        onChange={(newValue) => {setSetdate(newValue);},()=>{<Schedule/>}}
        onClick={() => {setActive(!active);}}
        renderInput={(params) => <TextField {...params} />}
        
      />
      <Button variant="contained" onClick={() => {setActive("newslot");}}>Contained</Button>
     
      {active==="newslot" && <Schedule/>}
      
    </LocalizationProvider>
  );
}

// import React,{useState} from 'react';
// import DayTimePicker from '@mooncake-dev/react-day-time-picker';
// export default function BasicDatePicker() {
//   const [isScheduling, setIsScheduling] = useState(false);
//   const [isScheduled, setIsScheduled] = useState(false);
//   const [scheduleErr, setScheduleErr] = useState('');
//   const handleScheduled = date => {
//     setIsScheduling(true);
//     setScheduleErr('');
//     fakeRequest(date)
//       .then(json => {
//         setScheduleErr('');
//         setIsScheduled(true);
//         console.log('fake response: ', json);
//       })
//       .catch(err => {
//         setScheduleErr(err);
//       })
//       .finally(() => {
//         setIsScheduling(false);
//       });
//     }
//   return (
//     <DayTimePicker timeSlotSizeMinutes={15}
    
//     isLoading={isScheduling}
//     isDone={isScheduled}
//     err={scheduleErr}
//     onConfirm={handleScheduled} 
//     confirmText="Book Appointment "
//     doneText="Your Appointment is Done"/>
    
//   );
// }