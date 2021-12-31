import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './currency.css';
import Button from '@mui/material/Button';
const Currency = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
    
  }
  function reset (){
    setFrom("usd");
    setTo("inr");
    setInput("0");
    setInput.value=null;
    setOutput.value=null;
    }
    return (
       <>
      
      <div className="currencycontainer">
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={options} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { flip()}}/>
        </div>
        <div className="right">
          <h3>To</h3>
          <Dropdown options={options} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To"  />
        </div>
   
         <div >
          <h3>Amount</h3>
          <input type="text" 
             placeholder="Enter the amount" 
             value={input}
             onChange={(e) => setInput(e.target.value)} />
        </div>
      </div>
      <div className="result">
       <Button variant="contained"  onClick={()=>{convert()}}>Convert</Button> &nbsp; &nbsp;
       <Button variant="contained"  onClick={()=>{reset()}}>Reset</Button>
        <h2>Converted Amount:</h2>
        <p>{input+" "+from+" = "}</p><p style={{color:"#F44D2D"}}>{+output.toFixed(2) + " " + to}</p>
  
      </div>
    
       </>
    )
}

export default Currency;
