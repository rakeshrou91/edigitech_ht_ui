import React, { Component, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import {Grid} from '@material-ui/core';
import Box from '@mui/material/Box';

export class FormPersonalDetails extends Component {
  
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const paperStyle={padding:20,height:'60vh',width :"auto",margin:"100px auto"}
    const buttonStyle={margin:'8px 0',width:'43ch',height:'6ch'}
    const textfieldStyle={width:'38ch', backgroundColor:'white'}
   
    
    const h1colorstyle={color:'black'}
    return (
      <>
      <Container
          maxWidth="lg"
          style={{ justifyContent: "center" }}
        >
      <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 800,
                height: "auto",
                align: "center",
              },
            }}
          >
            <Paper elevation={10} style={{paddingLeft:'10px',paddingRight:'10px'}}>
            <h2 style={{color:'black',marginTop:'5px'}}>Enter Patient Information</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
                placeholder="Enter Your Patient Name"
                label="Patient name"
                onChange={handleChange("patientname")}
                defaultValue={values.patientname}
                margin="normal"
                fullWidth
                
              />
              <br/>
              <TextField
                placeholder="Enter Your Reason for Booking"
                label="Reason"
                onChange={handleChange("reason")}
                defaultValue={values.reason}
                margin="normal"
                fullWidth
              /><br/>
               <TextField
                placeholder="Enter Your Address"
                label="Address"
                onChange={handleChange("address")}
                defaultValue={values.address}
                margin="normal"
                
               
              /> &nbsp;&nbsp;
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                margin="normal"
              
               
              /> &nbsp;&nbsp;
               <TextField
                placeholder="Enter Your Zip Code"
                label="Zip Code"
                onChange={handleChange("zipcode")}
                defaultValue={values.zipcode}
                margin="normal"
              
               
              /><br/>
              <TextField
                placeholder="Enter Your Email Id"
                label="Email Id"
                onChange={handleChange("emailid")}
                defaultValue={values.emailid}
                margin="normal"
               
              /> &nbsp;&nbsp;
              <TextField
                placeholder="Enter Your Mobile No"
                label="Mobile No"
                onChange={handleChange("mobileno")}
                defaultValue={values.mobileno}
                margin="normal"
               
              />
               {<br />}
               <Button color="secondary" variant="contained" onClick={this.back}>
                Back
              </Button>
              <br/>
              <br/>
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
                style={{marginBottom:"10px"}}
              >
                Continue
              </Button>
              <br/>





            </Paper>
            
      </Box>
      </Container>
       {/* <Paper style={paperStyle}>
         <Grid align="center">
         
              <h2 style={h1colorstyle}>Enter Patient Information</h2>
            </Grid>
            <Grid align="center" >
            <TextField
                placeholder="Enter Your First Name"
                label="Firstname"
                onChange={handleChange("firstname")}
                defaultValue={values.firstname}
                margin="normal"
                style={{width:"48%"}}
                
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
               <TextField
                placeholder="Enter Your Last Name"
                label="Lastname"
                onChange={handleChange("lastname")}
                defaultValue={values.lastname}
                margin="normal"
                style={{width:"48%"}}
               
              />
            <TextField
                placeholder="Enter Your Occupation"
                label="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Bio"
                label="Bio"
                onChange={handleChange("bio")}
                defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
              <br />

              <Button color="secondary" variant="contained" onClick={this.back}>
                Back
              </Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
                style={buttonStyle}
              >
                Continue
              </Button>
           
    
        <br/><br/>
        
      
       
        
      
        </Grid>
        
       
     
         </Paper> */}

        {/* <Container
          maxWidth="lg"
          style={{ backgroundColor: "#4863A0", justifyContent: "center" }}
        >
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Zip
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>

           <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 400,
                height: 400,
                align: "center",
              },
            }}
          >
            <Paper elevation={10}>
              <TextField
                placeholder="Enter Your Occupation"
                label="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
                margin="normal"
              />
              <br />
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Bio"
                label="Bio"
                onChange={handleChange("bio")}
                defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
              <br />

              <Button color="secondary" variant="contained" onClick={this.back}>
                Back
              </Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >
                Continue
              </Button>
            </Paper>
             <Paper />
      <Paper elevation={3} />
  
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" /> 
            
           
          </Dialog>
          </Box> 
        </Container> */}
      </>
    );
  }
}

export default FormPersonalDetails;
