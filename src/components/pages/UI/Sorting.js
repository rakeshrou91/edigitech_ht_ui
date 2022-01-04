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
  return (
    <div >
     <Container maxWidth="lg"  >
     <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 220,
          height: 52,
        },
      }}
    >
      <Paper variant="outlined" >
     
      <FormControlLabel control={<Checkbox />} label="Video Consult" />
      </Paper>
      <Paper variant="outlined">
        
      <Select>
      </Select>
      </Paper>
      <Paper style={{ boxShadow: "none",width: 'auto' }}>
      <Button variant="text">Reset Filters</Button>
      </Paper>
      <Paper style={{ boxShadow: "none" ,width: 'auto'}}>
      <FormLabel component="legend" style={{alignItems:'end',justifyContent:'end',display: 'grid',marginTop:'inherit'}}>Sort By</FormLabel>
      </Paper>
      <Paper style={{ boxShadow: "none" }}>
      <Select>
      </Select>
      </Paper>
    </Box>
  
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: "auto",
            },
          }}
        >
          <Paper variant="outlined">
            <FormLabel component="legend" style={{fontSize:'16px',fontWeight:'bold'}}>Gender</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Male Doctor" />
              <FormControlLabel control={<Checkbox />} label="Female Doctor" />
            </FormGroup>
          </Paper>

          <Paper variant="outlined" square>
            <FormLabel component="legend" style={{fontSize:'16px',fontWeight:'bold'}}>Consultation Fee</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="free" control={<Radio />} label="Free" />
              <FormControlLabel
                value="onetotwohundred"
                control={<Radio />}
                label="1-200"
              />
              <FormControlLabel
                value="twotofivehundred"
                control={<Radio />}
                label="201-500"
              />
              <FormControlLabel
                value="fivehundredplus"
                control={<Radio />}
                label="501+"
              />
            </RadioGroup>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Sorting;
