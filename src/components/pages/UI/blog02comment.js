import React from 'react'
import '../comman.css';
import Image from 'react-bootstrap/Image';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Blog02comment = () => {
    return (
        <>
      <Paper style={{boxShadow:"none"}}>
      <span className="commentsspan"> Comments (3)</span>
      <Grid>
        <Card className="commentscard" >
          <tr> 
            <Avatar src={process.env.PUBLIC_URL + "/cmnt-1.jpg"} style={{ width: 80, height: 80,border: '2px solid #496cfe'}}/>
            <span>Angel Smith</span>
            <a>November 20,2018 at 8:31 pm</a>
            <p>Maecenas at turpis ut lacus posuere dapibus. Fusce et sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget neque commodo facilisis. Nunc malesuada dolor vitae feugiat fermentum.</p>
          </tr>
          <a href="#">REPLY <i class="fas fa-reply-all"></i></a>
        
      
        </Card>
        <Card className="commentscard">
          <tr> 
            <Avatar src={process.env.PUBLIC_URL + "/cmnt-2.jpg"} style={{ width: 80, height: 80,border: '2px solid #496cfe'}}/>
            <span>Mahedi Amin</span>
            <a>September 3,2012 at 10:30 am</a>
            <p>Maecenas at turpis ut lacus posuere dapibus. Fusce et sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget neque commodo facilisis. Nunc malesuada dolor vitae feugiat fermentum.</p>
            
          </tr>
         
           <a href="#">REPLY <i class="fas fa-reply-all"></i></a>
      
        </Card>
        <Card className="commentscard">
          <tr> 
            <Avatar src={process.env.PUBLIC_URL + "/cmnt-3.jpg"} style={{ width: 80, height: 80,border: '2px solid #496cfe'}}/>
            <span>Cheris Ames</span>
            <a>January 4,2013 at 10:15 am</a>
            <p>Maecenas at turpis ut lacus posuere dapibus. Fusce et sollicitudin libero, id vehicula sem. Morbi pharetra nisl eget neque commodo facilisis. Nunc malesuada dolor vitae feugiat fermentum.</p>
          </tr>
         
          <a href="#">REPLY <i class="fas fa-reply-all"></i></a>
      
        </Card>
       
      </Grid>
    </Paper>
        </>
    )
}

export default Blog02comment;
