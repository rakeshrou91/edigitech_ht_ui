import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import {TextField} from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select.css";
import axios from 'axios';

export  function Currency() {
  const [text1, setText1] = React.useState(1);
  const [text2, setText2] = React.useState(1);
  const [country1, setCountry1] = React.useState([]);
  const [country2, setCountry2] = React.useState([]);
  const [value1, setValue1] = React.useState(1);
  const [value2, setValue2] = React.useState(1);

  
  useEffect(()=>{ 
     getdata();
  },[])
  async function getdata(){
    const result=await axios.get("");
    console.log(result);
  }
  function convert(){

  }

  return (
   <>
    <form onsubmit={convert}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label"  onChange={(e)=>setValue1(e.target.value)}>Select Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Currency"
          
        >
          
          <MenuItem className="MenuItem" value={156}>New Belarusian Ruble</MenuItem> 
        
        </Select>
      </FormControl>

      {/* <TextField className="textfieldamount" id="outlined-basic" value={text1 || ""} onChange={(e)=>setText1(e.target.value)} autoComplete="off" label="Amount" variant="outlined" /> 
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label" onChange={(e)=>setValue2(e.target.value)}>Select Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
          label="Currency"
          
        >
          
          <MenuItem className="MenuItem" value={156}>New Belarusian Ruble</MenuItem> 
        
        </Select>
      </FormControl>
      <TextField className="textfieldamount" value={text2 || ""} id="outlined-basic" label="Amount" variant="outlined" />  */}
      </form>
   </>
  );
}
export  function Department() {
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
   
      <FormControl className="formcontrol1">
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={1}>Anaesthesia</MenuItem>
          <MenuItem className="MenuItem" value={2}>Cardiology</MenuItem>
          <MenuItem className="MenuItem" value={3}>Cosmetic Surgery</MenuItem>
          <MenuItem className="MenuItem" value={4}>Dentist</MenuItem>
          <MenuItem className="MenuItem" value={5}>ENT Specialist</MenuItem>
          <MenuItem className="MenuItem" value={6}>Gastroenterology</MenuItem>
          <MenuItem className="MenuItem" value={7}>General Physician</MenuItem>
          <MenuItem className="MenuItem" value={8}>General Surgeon</MenuItem>
          <MenuItem className="MenuItem" value={9}>Gynecology</MenuItem>
          <MenuItem className="MenuItem" value={10}>Hematology</MenuItem>
          <MenuItem className="MenuItem" value={11}>Hepatology</MenuItem>
          <MenuItem className="MenuItem" value={12}>Nephrology</MenuItem>
          <MenuItem className="MenuItem" value={13}>Neurology</MenuItem>
          <MenuItem className="MenuItem" value={14}>Neurosurgery</MenuItem>
          <MenuItem className="MenuItem" value={15}>Oncology</MenuItem>
          <MenuItem className="MenuItem" value={16}>Orthopaedics</MenuItem>
          <MenuItem className="MenuItem" value={17}>Pediatrics</MenuItem>
          <MenuItem className="MenuItem" value={18}>Pulmonology</MenuItem>
          <MenuItem className="MenuItem" value={19}>Radiology</MenuItem>
          <MenuItem className="MenuItem" value={20}>Spinal</MenuItem>
          <MenuItem className="MenuItem" value={21}>Surgery</MenuItem>
          <MenuItem className="MenuItem" value={22}>Transplantation</MenuItem>
          <MenuItem className="MenuItem" value={23}>Urology</MenuItem>
          <MenuItem className="MenuItem" value={24}>Vascular</MenuItem>
        </Select>
      </FormControl>
  
  );
}
export  function Destination() {
  const [destination, setDestination] = React.useState('');

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    
      <FormControl className="formcontrol1">
        <InputLabel id="demo-simple-select-label">Destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destination}
          label="Destination"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={1}>India</MenuItem>
          <MenuItem className="MenuItem" value={2}>UAE</MenuItem>
          <MenuItem className="MenuItem" value={3}>Dubai</MenuItem>
          <MenuItem className="MenuItem" value={4}>Nigeria</MenuItem>
          <MenuItem className="MenuItem" value={5}>Kenya</MenuItem>
        </Select>
      </FormControl>
   
  );
}
