import React, { Component, useState } from "react";
import isWeekend from "date-fns/isWeekend";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@material-ui/core/Container";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Paper from "@mui/material/Paper";
import { Grid } from "@material-ui/core";

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecteddate: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    this.setState({ selecteddate: e });
    // console.log("counter", this.state.value);
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const paperStyle = {
      padding: 20,
      height: "60vh",
      width: 780,
      margin: "100px auto",
    };
    const buttonStyle = { margin: "8px 0", width: "43ch", height: "6ch" };
    const textfieldStyle = { width: "38ch", backgroundColor: "white" };
    const calenderstyele = {
      width: "350px",
      maxWidth: "100%",
      background: "black",
      border: "40px solid #a0a096",
      fontFamily: "Arial, Helvetica, sans-serif",
      lineHeight: "1.500em",
    };
    const h1colorstyle = { color: "black" };
    const { selecteddate } = this.state;
    return (
      <>
        <Calendar onChange={this.handleClick}  onSelect={handleChange("selecteddate")} defaultValue={values.selecteddate}  />
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2 style={h1colorstyle}>Select Appointment</h2>
          </Grid>
          <Grid align="center">
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Basic example"
            value={selecteddate}
            onChange={handleChange("selecteddate")}
            defaultValue={values.selecteddate}
            renderInput={(params) => <TextField {...params}  />}
          />
        </LocalizationProvider>
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange("city")}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter Your date"
              label="Date"
              onChange={handleChange("mystore")}
              defaultValue={values.mystore}
          
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

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={buttonStyle}
            >
              Continue
            </Button>

            <br />
            <br />
          </Grid>
        </Paper>
      </>
      // <MuiThemeProvider>
      //   <>
      //     <Dialog
      //       open
      //       fullWidth
      //       maxWidth='sm'
      //     >
      //       <AppBar title="Enter User Details" />
      //       <TextField
      //         placeholder="Enter Your First Name"
      //         label="First Name"
      //         onChange={handleChange('firstName')}
      //         defaultValue={values.firstName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Last Name"
      //         label="Last Name"
      //         onChange={handleChange('lastName')}
      //         defaultValue={values.lastName}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <TextField
      //         placeholder="Enter Your Email"
      //         label="Email"
      //         onChange={handleChange('email')}
      //         defaultValue={values.email}
      //         margin="normal"
      //         fullWidth
      //       />
      //       <br />
      //       <Button
      //         color="primary"
      //         variant="contained"
      //         onClick={this.continue}
      //       >Continue</Button>
      //     </Dialog>
      //   </>
      // </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
