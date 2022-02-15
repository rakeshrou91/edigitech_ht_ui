import React,{ useState, useRef ,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Grid,Paper, Avatar, TextField, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../actions/auth";
import { toast } from 'react-toastify';

export default function Login(props) {
  const { isOpen, setIsOpen } = props;
  const form = useRef();
  const checkBtn = useRef();
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  

  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
  };
  
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Required").min(3, 'Must have atleast 3 characters'),
        password: Yup.string().required("Required"),
       // remember:Yup.bool.required("Required")
    })
    const onSubmit = (values, props) => {
        setTimeout(() => {
          props.resetForm()
          props.setSubmitting(false)
      }, 2000)

        //if (checkBtn.current.context._errors.length === 0) {
            console.log(values.username)
            //props.username
            dispatch(login(values.username, values.password))
              .then(() => {
                props.history.push("/profile");
                window.location.reload();
              })
              .catch(() => {
                toast.error(message,{ position: toast.POSITION.TOP_CENTER,closeOnClick: true}) 
                //console.log(message)
                // setLoading(false);
              });
        };
        if (isLoggedIn) {
          console.log("logged IN")
          return <Redirect to="/profile" />;
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
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage style={{ color: 'red' }}  name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage   name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me" ref={checkBtn}
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                                

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    </Dialog>
  );
}
