import React from 'react';
import "../Aboutus.css";
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";


const Aboutussignup = () =>{

    return (
     
        <Paper className="paper1" style={{boxShadow:'none'}}>
        <Grid>
          <Card className="card" style={{boxShadow:'none'}}>
            <div className="container">
               <h4>SAVE TIME, SAVE MONEY</h4>
               <h1>Let’s Get Started</h1>
               <p>We have the knowledge, experience, and expertise to take care of all your medi <br/>travel needs. Sign up and we'll send the best medi deals to you</p>
               <button >SIGN UP</button>
            </div>
           
             
          </Card>
        </Grid>
      </Paper>
    );
}

export default Aboutussignup;