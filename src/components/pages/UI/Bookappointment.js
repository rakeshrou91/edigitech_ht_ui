import React, { useState } from "react";
import Box from "@mui/material/Box";
import * as FaIcons from 'react-icons/fa';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import moment from 'moment';
import Avatar from "@mui/material/Avatar";
import ErrorModal from "./ErrorModal";

const Bookappointment=(props)=> {
  const [selecteddate, setSelecteddate] = useState(new Date());
  const [alertbook, setAlertbook] = useState(false);
  const [alertavailable, setAlertavailable] = useState(false);
  const [showpaymentform, setShowpaymentform] = useState(false);
  const [sort, setSort] = useState("select");
 
  const [showbutton, setShowbutton] = useState(false);
  const [gender, setGender] = useState("");
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    mobile:'',
    emailid:'',
    city:'',
    reason:'',
    // nameofcard:'',
    // cardno:'',
     // expirymonth:'',
      // expiryyear:'',
    // bankname:'',
    // amount:'',
    // cardno:'',
     // cvv:'',
     });
  const handleChangedata = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values.firstname);
    
  };
  
  const [activepatient, setActivepatient] = useState(false);
  const [activepayment, setActivepayment] = useState(false);
  const [activesavebutton, setActivesavebutton] = useState(false);
  const [activesaveandpay, setActivesaveandpay] = useState(false);
  const[Message,setMessage]=useState();
  const fulldate=moment(selecteddate).format('DD-MM-YYYY');

  const data = {
    fulldate:fulldate,
    time: sort,
    firstname: values.firstname,
    lastname:values.lastname ,
    gender :gender,
    mobile : values.mobile,
    emailid: values.emailid,
    city: values.city,
    reason: values.reason ,
  };
const handlenext=()=>{
    setShowpaymentform(true);
}
const messageHandler=()=>{
  setMessage(null);}
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/slotdate", data)
      .then((res) => {
        setMessage({
          title:'Appointment Booked',
          message:props.showdrname,
          message1:fulldate,
          message2:sort
         });
      
         setActivepatient(false);
         setActivepayment(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  const handleGender = (event) => {
    setGender(event.target.value);
    console.log(gender);
   
  };
  const patientform = (
    <div>
      <Container maxWidth="md">
        <form>
          <Paper style={{ padding: 16 }} elevation={10}>
          <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold" }}
            >
             Enter Patient Details 
            </Typography>
            <TextField
              id="reasonforbook"
              label="Reason For Book"
              variant="standard"
              value={values.reason}  onChange={handleChangedata('reason')}
              fullWidth
            />
            <br />
            <br />
            <TextField
              id="firstname"
              label="First Name"
              variant="standard"
              value={values.firstname}  onChange={handleChangedata('firstname')}
              required
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
    
            <TextField id="lastname" value={values.lastname}  onChange={handleChangedata('lastname')} label="Last Name" variant="standard" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="emailid"  value={values.emailid}  onChange={handleChangedata('emailid')} label="Email Id" variant="standard" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="age"  value={values.age}  onChange={handleChangedata('age')} label="Age" variant="standard" />
          
            <br/> <br/>

            <TextField id="city" value={values.city}  onChange={handleChangedata('city')} label="City" variant="standard" /> &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="state" value={values.state}  onChange={handleChangedata('state')} label="State" variant="standard" /> &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="country" value={values.country}  onChange={handleChangedata('country')} label="Country" variant="standard" />
            

            <br />
            <br />
            <TextField
              id="address"
              label="Address"
              variant="standard"
              fullWidth
            />
            <br />
            <br />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio  
                  checked={gender === "female"}
                  onChange={handleGender} />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio 
                    checked={gender === "male"}
                    onChange={handleGender} />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                {/* <FormControlLabel
                  value="disabled"
                  disabled={false}
                  control={<Radio />}
                  label="other"
                /> */}
              </RadioGroup>
            </FormControl>
            <br />
            <br />
         
            {showpaymentform &&  <Button
              variant="contained"
              onClick={handlenext}
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Next
            </Button>}
            
          </Paper>
        </form>
      </Container>
    </div>
  );
  const paymentform = (
    <div>
      <Container maxWidth="md">
        <form>
          <Paper style={{ padding: 16 }} elevation={10}>
          <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold" }}
            >
             Payment Method
            </Typography>
            <FormControl>
             
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="cashmethod"
                  control={<Radio checked/>}
                  label="Credit Card/Debit Card"
             
                />
               
            
              </RadioGroup>
            </FormControl>
            <br />
            <br />
            <TextField
              id="nameoncard"
              label="Name on Card"
              variant="standard"
              required
            
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="cardnumber" label="Card Number " variant="standard" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="expirymonth" label="Expiry Month" variant="standard" /><br/><br/>
          
            <TextField id="bankname" label="Bank Name" variant="standard"/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="cvv" label="CVV" variant="standard" />

            <br />
            <br />
            <TextField id="amount" label="amount" variant="standard" />
            <br/>
          </Paper>
        </form>
      </Container>
    </div>
  );
   async function handleCheck() {
    try {
      const res = axios("http://localhost:3000/slotdate");
      const res1 = axios("http://localhost:3000/DrInfo");
      const userdata = (await res).data;
      const userdata1 = (await res1).data;
      const length = userdata.length;
      const doctordatalength = userdata1.length;
      //  console.log(length);
      for (let i = 0; i < doctordatalength; i++) {
        if (userdata1[i].appointmentfee > 0) {
          // setShowpaymentform(true);
          console.log(userdata1[i].appointmentfee);
        }
      }
      for (let i = 0; i < length; i++) {
        if (userdata[i].fulldate === fulldate && userdata[i] === sort){
         
          setAlertbook(true);

       

          return;
        } else {
         
          setAlertavailable(true);
          setShowbutton(true);
         
          return;
        }

        // console.log(userdata[i].date);
      }
      // if(item.date==day && item.month == month&& item.year == year){
      //     console.log(item.date);
      //     console.log(day);
      //     console.log("first");

      // }else {
      //     console.log("notsame");
      // }
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  
  const handleproceed = () => {
    if(props.showappfee > 0){
      setActivepatient(true);
      setActivepayment(true);
      setActivesaveandpay(true);
      
    }else{
      setActivepatient(true);
      setActivesavebutton(true);
    }
    
  };
  const handleChange = (date) => {
    setSelecteddate(date);
   console.log(fulldate);
  };
  const handleChangetime = (event) => {
    setSort(event.target.value);
  //  console.log(sort);
  };
  const handlecancel = ()=>{
    setActivepatient(false);
    setActivepayment(false);
    setActivesavebutton(false);
    setActivesaveandpay(false);
  }
  const buttonsave = (
    <div>
      <Container maxWidth="md">
        <Paper>
        &nbsp;&nbsp;&nbsp;&nbsp;  <Button   variant="contained"  onClick={handleSubmit}
              style={{ color: "#fff", marginBottom: "20px" }}>
              Save 
           </Button>
           &nbsp;&nbsp;&nbsp;&nbsp;<Button  onClick={handlecancel} variant="contained"
              style={{ color: "#fff", marginBottom: "20px" }}>
             Cancel
           </Button>
        </Paper>
        
      </Container>
    </div>
  );
  const buttonsaveandpay = (
    <div>
      <Container maxWidth="md">
        <Paper>
        &nbsp;&nbsp;&nbsp;&nbsp;  <Button 
              variant="contained"
              style={{ color: "#fff", marginBottom: "20px" }}
              onClick={handleSubmit}
            >
             Save and Pay
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;  <Button
            onClick={handlecancel}
              variant="contained"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
             Cancel
            </Button>
          </Paper>
       
      </Container>
    </div>
  );
 const handlealertclose=()=>{
   setAlertavailable(false);
   setShowbutton(false);
   
 }
  return (
    <>
     {Message && (
        <ErrorModal 
        title={Message.title} 
        message={Message.message} 
        message1={Message.message1} 
        message2={Message.message2} 
   
        onConfirm={messageHandler} />)}
      <Container maxWidth="lg" style={{ justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 320,
              height: "auto",
              align: "center",
              background:"#4863A0"
            },
          }}
        >
          <Paper
            elevation={10}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold", color: "#fff",justifyContent: "center",alignItems:"center",display:'flex'}}
            >
             <FaIcons.FaClinicMedical/>   &nbsp;{props.showclinicname}
            </Typography>
            <Avatar alt="DoctorImage" src={props.showdrimage} style={{ height: 130, width: 130 }} />
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold", color: "#fff",justifyContent: "center",alignItems:"center",display:'flex'}}
            >
             {props.showtype}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold", color: "#fff" }}
            >
              Appointment Fee : {props.showappfee}
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{ fontWeight: "bold", color: "#5BD1D7" }}
            >
               {}
            </Typography>
          </Paper>
          <Paper
            elevation={10}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <Calendar
              selected={selecteddate}
              onChange={handleChange}
              value={selecteddate}
              minDate={moment().toDate()}
            />
          </Paper>
          <Paper
            elevation={10}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          ><br/>
            <select
              id="lang"
              style={{
                boxShadow: "none",
                border: "none",
                height: "52px",
                width: "300px",
              }}
              onChange={handleChangetime}
              value={sort}
              // onChange={change}
              // value={sort}
            >
              <option style={{ paddingBottom: "2px" }} value=" Select">
                Select
              </option>
              <option style={{ paddingBottom: "2px" }} value="09.00 AM to 09.15 AM">
          09.00 AM to 09.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 09.15 AM to 09.30 AM">
          09.15 AM to 09.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="09.30 AM to 09.45 AM">
          09.30 AM to 09.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="09.45 AM to 10.00 AM">
          09.45 AM to 10.00 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.00 AM to 10.15 AM">
          10.00 AM to 10.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.15 AM to 10.30 AM">
           10.15 AM to 10.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.30 AM to 10.45 AM">
          10.30 AM to 10.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="10.45 AM to 11.00 AM">
          10.45 AM to 11.00 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.00 AM to 11.15 AM">
         11.00 AM to 11.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.15 AM to 11.30 AM">
         11.15 AM to 11.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.30 AM to 11.45 AM">
          11.30 AM to 11.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.45 AM to 12.00 PM">
          11.45 AM to 12.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.00 PM to 12.15 PM">
         12.00 PM to 12.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.15 PM to 12.30 PM">
         12.15 PM to 12.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.30 PM to 12.45 PM">
         12.30 PM to 12.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 12.45 PM to 01.00 PM">
         12.45 PM to 01.00 PM
        </option>
        
        <option style={{ paddingBottom: "2px" }} value="03.00 PM to 03.15 PM">
          03.00 PM to 03.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.15 PM to 03.30 PM">
        03.15 PM to 03.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.30 PM to 03.45 PM">
        03.30 PM to 03.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.45 PM to 04.00 PM">
          03.45 PM to 04.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.00 PM to 04.15 PM">
        04.00 PM to 04.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.15 PM to 04.30 PM">
        04.15 PM to 04.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.30 PM to 04.35 PM">
        04.30 PM to 04.35 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.35 PM to 04.45 PM">
        04.35 PM to 04.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.45 PM to 05.00 PM">
          04.45 PM to 05.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 05.00 PM to 05.15 PM">
        05.00 PM to 05.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="05.15 PM to 05.30 PM">
        05.15 PM to 05.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="05.30 PM to 05.45 PM">
        05.30 PM to 05.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 05.45 PM to 06.00 PM">
        05.45 PM to 06.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 06.00 PM to 06.15 PM">
        06.00 PM to 06.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="06.15 PM to 06.30 PM">
        06.15 PM to 06.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 06.30 PM to 06.45 PM">
        06.30 PM to 06.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="06.45 PM to 07.00 PM">
        06.45 PM to 07.00 PM
        </option>
            </select>
            <br />
            <br />
            <Button
              onClick={handleCheck}
              variant="contained"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              Check Slot
            </Button>
            {alertbook === true && (
              <Alert
                severity="error"
                onClose={() => {
                  setAlertbook(false);
                }}
              >
                Oops! Slot Is Booked
              </Alert>
            )}
            {alertavailable === true && (
              <Alert
                severity="success"
                onClose={handlealertclose}
              >
                Yeh! Slot Available Please Click on Proceed
              </Alert>
            )}
            <br />
            {showbutton === true && (
              <Button
                variant="contained"
                onClick={handleproceed}
                style={{ color: "#fff", marginBottom: "20px" }}
              >
                Proceed
              </Button>
              
            )}
            <br />
          </Paper>
          </Box>
          </Container>
      <br />
      {activepatient === true && patientform}<br/>
      {activepayment === true && paymentform}
      {activesavebutton === true && buttonsave}
      {activesaveandpay === true && buttonsaveandpay}
    
      {/* <Calendar selected={selecteddate} onChange={handleChange} value={selecteddate}  /> */}
      {/* <span>Selected Date:</span> {selecteddate.toDateString()}
      <br />
      <select
        id="lang"
        style={{
          boxShadow: "none",
          border: "none",
          height: "52px",
          width: "150",
        }}
        onChange={handleChangetime}
        value={sort}
        // onChange={change}
        // value={sort}
      >
        <option style={{ paddingBottom: "2px" }} value=" Select">
          Select
        </option>
        <option style={{ paddingBottom: "2px" }} value="09.00 AM to 09.15 AM">
          09.00 AM to 09.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 09.15 AM to 09.30 AM">
          09.15 AM to 09.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="09.30 AM to 09.45 AM">
          09.30 AM to 09.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="09.45 AM to 10.00 AM">
          09.45 AM to 10.00 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.00 AM to 10.15 AM">
          10.00 AM to 10.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.15 AM to 10.30 AM">
           10.15 AM to 10.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 10.30 AM to 10.45 AM">
          10.30 AM to 10.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="10.45 AM to 11.00 AM">
          10.45 AM to 11.00 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.00 AM to 11.15 AM">
         11.00 AM to 11.15 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.15 AM to 11.30 AM">
         11.15 AM to 11.30 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.30 AM to 11.45 AM">
          11.30 AM to 11.45 AM
        </option>
        <option style={{ paddingBottom: "2px" }} value="11.45 AM to 12.00 PM">
          11.45 AM to 12.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.00 PM to 12.15 PM">
         12.00 PM to 12.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.15 PM to 12.30 PM">
         12.15 PM to 12.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="12.30 PM to 12.45 PM">
         12.30 PM to 12.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 12.45 PM to 01.00 PM">
         12.45 PM to 01.00 PM
        </option>
        
        <option style={{ paddingBottom: "2px" }} value="03.00 PM to 03.15 PM">
          03.00 PM to 03.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.15 PM to 03.30 PM">
        03.15 PM to 03.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.30 PM to 03.45 PM">
        03.30 PM to 03.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="03.45 PM to 04.00 PM">
          03.45 PM to 04.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.00 PM to 04.15 PM">
        04.00 PM to 04.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.15 PM to 04.30 PM">
        04.15 PM to 04.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.30 PM to 04.35 PM">
        04.30 PM to 04.35 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.35 PM to 04.45 PM">
        04.35 PM to 04.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="04.45 PM to 05.00 PM">
          04.45 PM to 05.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 05.00 PM to 05.15 PM">
        05.00 PM to 05.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="05.15 PM to 05.30 PM">
        05.15 PM to 05.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="05.30 PM to 05.45 PM">
        05.30 PM to 05.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 05.45 PM to 06.00 PM">
        05.45 PM to 06.00 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 06.00 PM to 06.15 PM">
        06.00 PM to 06.15 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="06.15 PM to 06.30 PM">
        06.15 PM to 06.30 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value=" 06.30 PM to 06.45 PM">
        06.30 PM to 06.45 PM
        </option>
        <option style={{ paddingBottom: "2px" }} value="06.45 PM to 07.00 PM">
        06.45 PM to 07.00 PM
        </option>

        
      </select>
      <br />
      <span>Selected Time:</span> {sort}
      <br />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleCheck}>Check</button>
      <br />
      <span>Selected Time:</span> {message}
      <br />
      <span>Doctor Name</span> {props.doctorname} */}
        
    </>
  );
}
export default Bookappointment;
