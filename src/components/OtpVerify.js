import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import { register } from "../actions/auth";
export default function OtpVerify(props) {
    console.log(props)
    const { isOpen, setIsOpen } = props;

    const handleClose = () => {
      setIsOpen(false);
    }; 

    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const initialValues = {
        username: '',
        email: '',      
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
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
                  console.log("sscuees")
                //setSuccessful(true);
              })
              .catch(() => {
                //setSuccessful(false);
              });
        //  }
      
    }
    return (
        <Dialog
        open={isOpen}
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

                            <Field as={TextField} fullWidth name="username" label='sdsfsd'
                                placeholder="Enter your username" helperText={<ErrorMessage name="username" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                           
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
        </Dialog>
    )
}
