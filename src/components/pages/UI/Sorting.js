import Container from "@material-ui/core/Container";
import React, { useState,useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "react-select";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Redirect} from 'react-router-dom';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { set } from "date-fns/esm";
function Sorting() {
  const options = [
    { value: "relevance", label: "Relevance" },
    { value: "earliestAvailable", label: "Earliest Available" },
    { value: "priceLowToHigh", label: "Price - Low To High " },
    { value: "priceHighToLow", label: "Price - High To Low" },
    { value: "yearsofExperience", label: "Years of Experience" },
    { value: "recommendation", label: "Recommendation" },
  ];
  let string='';
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [userList,setUserList]= useState([]);
  const [searchterm,setSearchterm]= useState("");
  const [sort,setSort]= useState("select");
  const [searchtermfee,setSearchtermfee]= useState("");
  const [showlist, setShowlist]=useState([]);
  const [gender, setGender] = useState('');
  const [consultationfee, setConsultationfee] = useState('');
  const blue = {
    500: "#007FFF",
    600: "#0072E5",
    700: "#0059B2",
    200: "#5BD1D7",
  };
  
  const CustomButtonRoot = styled("button")`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[200]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 260px;
    height: 65px;
    &:hover {
      background-color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
        0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const handleChange = (event) => {
     setGender(event.target.value);
     setSearchterm(event.target.value);
     
   }
 
   const change = (event) => {
   
    setSort(event.target.value);
   
    if(event.target.value==="yearsofExperience"){
      return  setSearchterm(event.target.value);
    }

    
  }
   const handleChangefees = (event) => {
    setConsultationfee(event.target.value);
    if(event.target.value==="free"){
      return setSearchtermfee('free');
    }
    else if(event.target.value==="1-200"){
      return setSearchtermfee('1-200');
      
    }
    else if(event.target.value==="201-500"){
      return setSearchtermfee('201-500');
    }
    else if(event.target.value==="501+"){
      return setSearchtermfee('501+');
    }
   
    console.log(event.target.value);
  }
   const resetRadioState = () => {
     setGender('');
     setConsultationfee('');
     setSearchterm("");
     setSearchtermfee("");
   }
 
  function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }
  useEffect(()=>{
    fetch('http://localhost:3000/DrInfo')
    .then(response=>response.json())
    .then(result=>setUserList(result))
    .catch(error=>console.log(error));
  },[])
 
  const showfilter = (
    <>
      <Paper style={{ backgroundColor: "#4863A0", boxShadow: "none" }}>
      
         <FormLabel
          component="legend"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
        >
          Gender
        </FormLabel>
      <RadioGroup
          aria-label="gender"
          name="radio-buttons-group"
          
        >
          <FormControlLabel
            control={<Radio style={{ color: "#fff" }}  value="male"
            checked={gender === 'male'}
            onChange={handleChange}/>}
            label="Male"
          />
          <FormControlLabel
            control={<Radio style={{ color: "#fff" }} value="female"
            checked={gender === 'female'}
            onChange={handleChange}/>}
            label="Female"
          />
         
        </RadioGroup>
         {/* <Select styles={{ backgroundColor: "#023950" }} value={searchterm} options={genderoptions} onChange={(e) => {setSearchterm(e.target.value);}} /> */}
      </Paper>

      <Paper square style={{ backgroundColor: "#4863A0", boxShadow: "none" }}>
        <FormLabel
          component="legend"
          style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}
        >
          Consultation Fee
        </FormLabel>
        <RadioGroup
          aria-label="fees"
         
          name="radio-buttons-group"
        >
          <FormControlLabel
            control={<Radio style={{ color: "#fff" }}
            value="free"
            checked={consultationfee === 'free'}
            onChange={handleChangefees} />}
            label="Free"
          />
          <FormControlLabel
            value="onetotwohundred"
            control={<Radio style={{ color: "#fff" }} 
            value="1-200"
            checked={consultationfee === '1-200'}
            onChange={handleChangefees}/>}
            label="1-200"
          />
          <FormControlLabel
            value="201-500" 
            control={<Radio style={{ color: "#fff" }}  
            checked={consultationfee === '201-500'}
            onChange={handleChangefees}/>}
            label="201-500"
          />
          <FormControlLabel
            value="501+"
            control={<Radio style={{ color: "#fff" }} 
            checked={consultationfee === '501+'}
            onChange={handleChangefees}/>}
            label="501+"
          />
        </RadioGroup>
     
      </Paper>
    </>
  );
  
  return (
    <>
    <div style={{ backgroundColor: "#4863A0" }}>
      <Container maxWidth="lg" style={{ backgroundColor: "#4863A0" }}>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 220,
              height: 52,
              backgroundColor: "#728FCE",
            },
          }}
        >
          <Paper variant="outlined" style={{ color: "#fff" }}>
            <FormControlLabel
              control={<Checkbox style={{ color: "#fff" }} />}
              label="Video Consult"
            />
          </Paper>
          <Paper>
            <Link
              variant="text"
              style={{
                color: "#fff",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4%",
              }}
              to="/schedule"
            >
              {" "}
              Availability &nbsp; <i class="fas fa-chevron-down"></i>
            </Link>
          </Paper>
          <Paper
            style={{
              boxShadow: "none",
              width: "auto",
              backgroundColor: "#4863A0",
            }}
          >
            <Button
              variant="text"
              style={{ color: "#fff" }}
              onClick={() => {
                setActive(!active);
              }}
            >
              All Filters &nbsp;
              <i
                class={
                  active === true ? "fas fa-chevron-down" : "fas fa-chevron-up"
                }
              ></i>
            </Button>
          </Paper>
          <Paper
            style={{
              boxShadow: "none",
              width: "auto",
              backgroundColor: "#4863A0",
            }}
          >
            <Button variant="text" style={{ color: "#5BD1D7" }}  onClick={resetRadioState} >
              Reset Filters
            </Button>
          </Paper>
          <Paper
            style={{
              boxShadow: "none",
              width: "auto",
              backgroundColor: "#4863A0",
            }}
          >
            <FormLabel
              component="legend"
              style={{
                alignItems: "end",
                justifyContent: "end",
                display: "grid",
                marginTop: "inherit",
                color: "#fff",
              }}
            >
              Sort By
            </FormLabel>
          </Paper>
          <Paper style={{ boxShadow: "none" }}>
            <select id="lang" style={{boxShadow: "none",border:'none',height:'52px',width:'210px'}} onChange={change} value={sort}>
                  <option style={{paddingBottom:'2px'}} value="select">Select</option>
                  <option style={{paddingBottom:'2px'}}value="relevance">Relevance</option>
                  <option style={{paddingBottom:'2px'}}value="earliestAvailable">Earliest Available</option>
                  <option style={{paddingBottom:'2px'}} value="priceLowToHigh">Price - Low To High</option>
                  <option style={{paddingBottom:'2px'}}value="yearsofExperience">Years of Experience</option>
                  <option style={{paddingBottom:'2px'}}value="recommendation">Recommendation</option>
            </select>
          </Paper>
        </Box>

        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: "auto",
              color: "#fff",
              backgroundColor: "#728FCE",
            },
          }}
        >
          {active && showfilter}
        </Box>
      </Container>
      
      {<br />}
      
    </div>
    <div>
    <input type ="text" value={searchterm} style={{marginTop:'50px',marginBottom:'30px'}} placeholder="select" onChange={(e)=>{setSearchterm(e.target.value);}}></input>
    <input type="text " placeholder="select" value={searchtermfee} onChange={(event)=>{setSearchtermfee(event.target.value);}} />
    {userList.filter((val)=>{
        if(searchterm ==="" ){
          if(searchtermfee===""){
            return val;
          }
          if(searchtermfee==="free"){
            if(val.fees==="free"){
              return val;
          
            }
          }
          if(searchtermfee==="free"){
            if(val.fees==="free"){
              return val;
          
            }
          }
          if(searchtermfee ==="1-200"){
            for(let i = 1; i <= 200; i++){
              if(val.fees===i.toString()){
                return val;
            
              }
            }
          }
         if(searchtermfee ==="201-500"){
            for(let i = 201; i <= 500; i++){
              if(val.fees===i.toString()){
                return val;
            
              }
            }
          }
         if(searchtermfee ==="501+"){
            for(let i = 501; i <= 10000; i++){
              if(val.fees===i.toString()){
                return val;
            
              }
            }
          }
          //return val;
        }
        else if(searchterm ==="male" && searchtermfee ==="free"){
          if(val.gender === "male" && val.fees==="free"){
            return val;
          }
        }
        else if(searchterm ==="male" && searchtermfee ==="1-200"){
          for(let i = 1; i <= 200; i++){
            if(val.gender === "male" && val.fees===i.toString()){
              return val;
            }
            
          }
          
        }
        else if(searchterm ==="male" && searchtermfee ==="201-500"){
          for(let i = 201; i <= 500; i++){
            if(val.gender === "male" && val.fees===i.toString()){
              return val;
            }
            
          }
        }
        else if(searchterm ==="male" && searchtermfee ==="501+"){
          for(let i = 501; i <= 10000; i++){
            if(val.gender === "male" && val.fees===i.toString()){
              return val;
            }
            
          }
        }
        else if(searchterm ==="female" && searchtermfee ==="free"){
          if(val.gender === "female" && val.fees==="free"){
            return val;
          }
        }
        else if(searchterm ==="female" && searchtermfee ==="1-200"){
          for(let i = 1; i <= 200; i++){
            if(val.gender === "female" && val.fees===i.toString()){
              return val;
            }
            
          }
          
        }
        else if(searchterm ==="female" && searchtermfee ==="201-500"){
          for(let i = 201; i <= 500; i++){
            if(val.gender === "female" && val.fees===i.toString()){
              return val;
            }
            
          }
        }
        else if(searchterm ==="female" && searchtermfee ==="501+"){
          for(let i = 501; i <= 10000; i++){
            if(val.gender === "female" && val.fees===i.toString()){
              return val;
            }
            
          }
        }
        else if(val.gender===searchterm){
          return val;
        }
        else if(searchtermfee ==="free"){
         
            if(val.fees==="free"){
              return val;
            }
        }
        else if(searchterm==="yearsofExperience"){
          let length1=userList.length;
          string=val.experience;
          let length=string.length;
          console.log(length); 
          console.log(length1);   
     
          // userList.sort((a, b) => (a.fees - b.fees) )
          //  return userList;
        
        }
        else if(val.drname.toLowerCase().includes(searchterm.toLowerCase())){
          return val;
        }
        else if(val.type.toLowerCase().includes(searchterm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return(
          <div key={key}>
            <Container maxWidth="lg" >
            <Box sx={{display: "flex", flexWrap: "wrap","& > :not(style)": { m: 1, width: "auto",  height: "auto", }, }}  >
             <Paper elevation={0}>
                <Avatar alt="Remy Sharp" src={val.src} style={{ height: 130, width: 130 }}/>
             </Paper>
             <Paper elevation={0}>
             <Typography   variant="h6"  gutterBottom component="div"  style={{ fontWeight: "bold", color: "#5BD1D7" }}>
             {val.drname}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" style={{ color: "#878484" }}>
                 {val.type}
                 <Typography
                      variant="subtitle1"
                      gutterBottom
                      component="div"
                  >
                      {val.experience}  year experience overall
                  </Typography>
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                    <i class="fas fa-map-marker-alt fa-sm"></i> {val.address}
                    &nbsp;&nbsp;<i class="fas fa-circle fa-xs"></i>&nbsp;
                    {val.clinicname}
           </Typography>
          <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    style={{ color: "#878484" }}
                  >
                    {val.fees}  Consultation Fee at Clinic
          </Typography>
                  <div style={{border:'none',borderTop:'2px dashed #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
              {}
              </div>{<br/>}
                  <Button
                    variant="contained"
                    color="success"
                    style={{ fontWeight: "bold" }}
                  >
                    <i class="fas fa-thumbs-up"></i> &nbsp;{val.likes}
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="" style={{ color: "#413E3E", fontWeight: "bold" }}>
                    {val.story}
                  </a>
             
              </Paper>
              <Paper
                  elevation={0}
                  style={{ alignItems: "end",height:'100px' ,marginLeft:'10%'}}
                >
                   <Typography variant="subtitle1" gutterBottom component="div"  style={{color:'#5cb85c',fontWeight:'bold'}}>
                  <i class="fas fa-calendar-check"></i>&nbsp;{val.availablestatus}
                  </Typography>
                  <CustomButton >
                    <Typography variant="subtitle1" gutterBottom component="div" style={{ textDecoration:'none',color:'#fff'}}>
                     {val.appointment}
                      <Typography variant="body2" gutterBottom component="div">
                       {val.appointmentfee}
                      </Typography>
                    </Typography>
                  </CustomButton>
                </Paper>
               
              </Box>
              </Container>
              <hr size="1" width="90%" color="#878484" />  
              <div style={{border:'none',borderTop:'0px  #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
               {}
              </div>
              {<br/>}
                {/* <Paper
                  elevation={0}
                  style={{ alignItems: "end",height:'100px' ,marginLeft:'10%'}}
                >
                 
                  <Typography variant="subtitle1" gutterBottom component="div"  style={{color:'#5cb85c',fontWeight:'bold'}}>
                  <i class="fas fa-calendar-check"></i>&nbsp;{val.availablestatus}
                  </Typography>
                  <CustomButton onClick={this.redirectHandler}>
                    <Typography variant="subtitle1" gutterBottom component="div" style={{ textDecoration:'none',color:'#fff'}}>
                     {val.appointment}
                      <Typography variant="body2" gutterBottom component="div">
                       {val.appointmentfee}
                      </Typography>
                    </Typography>
                  </CustomButton>
                  {this.renderRedirect()}
                </Paper>
              </Box>
              <hr size="1" width="90%" color="#878484" />  
              <div style={{border:'none',borderTop:'0px  #878484',color:'#fff',backgroundColor:'#fff',height:'1px',width:'100%'}}>
              {}
              </div>
              {<br/>}
          
            
            
             <Paper elevation={0}>
             <Avatar alt="Remy Sharp" src={src} style={{ height: 130, width: 130 }}/>
             </Paper>
             <Paper elevation={0}>
             <Avatar alt="Remy Sharp" src={src} style={{ height: 130, width: 130 }}/>
             </Paper> */}
          

            
          </div>
        )
      })}
    </div>
    </>
  );
}

export default Sorting;
