import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { Grid, Box, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import { register } from "../actions/auth";
import  { verifyOtp }  from "../services/user.service"


export default function  Signup(props) {
    const { isOpen, setIsOpen } = props;
    const [openOtpDialog, setOpenOtpDialog] = useState(false);
    const { OtpVerified } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    
    const dispatch = useDispatch();
    const handleClose = () => {
      setIsOpen(false);
    };  
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const paperStyleEmail = { padding: 20, width: 350, margin: "0 auto",background: "#9dc3f3" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const otpStyle = { width: 35, margin: 10,padding: 12, height: 30}
    const otpGrid = {background: '#9dc3f3' ,align: 'center'}
    const boxBtn = {background: '#9dc3f3', display: 'flex', justifyContent: 'space-between'}
    const initialValues = {
        username: '',
        email: '',      
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
      //  if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(values.username, values.email, values.password))
              .then(() => {
                  setIsOpen("second")
              })
              .catch(() => {
                //setSuccessful(false);
              });
        //  }
       
    }

const onOtpSubmit = () => {
console.log(otp.join(''))
verifyOtp(otp.join('')).then((response) => {
    // if (response.data.accessToken) {
    //   localStorage.setItem("user", JSON.stringify(response.data));
    // }
     
    console.log(response.data)
  })
 .catch((response) => {
  console.log(response)
 });
    }
    
    return (
        <>
        <Dialog
        open={isOpen && isOpen === "first"} 
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      > 
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name="username" label='username'
                                placeholder="Enter your username" helperText={<ErrorMessage name="username" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
        </Dialog>
         <Dialog
         open={isOpen && isOpen === "second"}   
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"      
       >
           <Grid>
           <Paper style={paperStyleEmail}>
               <Grid align='center'>
                   <h2 style={headerStyle}>Email Verification</h2>
                   <Typography variant='caption' gutterBottom>Enter the OTP sent to your mail to verify your identity!</Typography>
               </Grid>
           </Paper>
           <Paper >
           <Grid>
           {otp.map((data, index) => {
                        return (
                            <input style={otpStyle}
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                  </Grid>
                  <Box style={boxBtn} >
                        <Button  variant='contained'>
                            Clear
                        </Button>
                        <Button   variant='contained'  
                        onClick={() => {
                            onOtpSubmit();
                          }}
                        >
                            Verify OTP
                        </Button>
                        </Box>
           </Paper>
           </Grid>
          
       </Dialog>
       </>
    )
}
