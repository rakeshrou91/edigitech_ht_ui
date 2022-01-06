import Container from "@material-ui/core/Container";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from 'react-select';
import Button from '@mui/material/Button';


function Sorting() {
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];
  return (
    <div style={{backgroundColor: "#4863A0" }}>
     <Container maxWidth="lg"  >
     <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 220,
          height: 52,
          backgroundColor:'#728FCE'
        },
      }}
    >
      <Paper variant="outlined" style={{color:'#fff'}}>
     
      <FormControlLabel control={<Checkbox  style={{color:'#fff'}}/>} label="Video Consult" />
      </Paper>
      <Paper variant="outlined">
        
      <Select styles={{backgroundColor: '#023950'}} >
       
      </Select>
      </Paper>
      <Paper style={{ boxShadow: "none",width: 'auto',backgroundColor:'#4863A0'}}>
      <Button variant="text" style={{color:'#5BD1D7'}}>Reset Filters</Button>
      </Paper>
      <Paper style={{ boxShadow: "none" ,width: 'auto',backgroundColor:'#4863A0'}}>
      <FormLabel component="legend" style={{alignItems:'end',justifyContent:'end',display: 'grid',marginTop:'inherit',color:'#fff'}}>Sort By</FormLabel>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
      <Select styles={{backgroundColor: '#023950'}}/>
     
      </Paper>
    </Box>
  
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: "auto",
              color:'#fff',
              backgroundColor:'#728FCE'
            },
          }}
        >
          <Paper  style={{backgroundColor:'#4863A0',boxShadow: "none"}}>
            <FormLabel component="legend" style={{fontSize:'16px',fontWeight:'bold',color:'#fff'}}>Gender</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox style={{color:'#fff'}}/>} label="Male Doctor" />
              <FormControlLabel control={<Checkbox style={{color:'#fff'}}/>} label="Female Doctor" />
            </FormGroup>
          </Paper>

          <Paper  square style={{backgroundColor:'#4863A0',boxShadow: "none"}}>
            <FormLabel component="legend" style={{fontSize:'16px',fontWeight:'bold',color:'#fff'}}>Consultation Fee</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="free" control={<Radio style={{color:'#fff'}}/>} label="Free" />
              <FormControlLabel
                value="onetotwohundred"
                control={<Radio style={{color:'#fff'}}/>}
                label="1-200"
              />
              <FormControlLabel
                value="twotofivehundred"
                control={<Radio style={{color:'#fff'}}/>}
                label="201-500"
              />
              <FormControlLabel
                value="fivehundredplus"
                control={<Radio style={{color:'#fff'}}/>}
                label="501+"
              />
            </RadioGroup>
          </Paper>
        </Box>
      </Container>
      {<br />}
    </div>
  );
}

export default Sorting;
