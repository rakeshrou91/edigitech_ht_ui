import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField,Input} from '@material-ui/core';
import {Card } from "@material-ui/core";
import Image from 'react-bootstrap/Image';
const Blog01sidecard = React.lazy(() => import('./UI/blog01sidecard'));
const Blog01card =React.lazy(() => import('./UI/blog01card'));
const Blogprevnext = React.lazy(() => import('./UI/blogprevnext'));
const Footer = React.lazy(() => import('./UI/footer'));

export default function Blog01() {
  return (
    <>
    <div className='blog1'>
    <div className="blog01heading">
             <h2 > Blogs</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Blogs</a> &nbsp;&nbsp;
            
      </div>
    </div>
    <Paper style={{boxShadow:"none"}}>
      
       <Grid container spacing={2}>
          <Grid item xs={10}>
       
          <Suspense fallback={<div>Loading...</div>}>
              <Blog01card/>
          </Suspense>
          </Grid>
         <Grid item xs={2}>
          <Suspense fallback={<div>Loading...</div>}>
             <Blog01sidecard/>
          </Suspense>
         </Grid>
 
       </Grid>
 
    </Paper>
    <br/>



    
    <Suspense fallback={<div>Loading...</div>}>
      <Blogprevnext/>
      <Footer/>
    </Suspense>
    </>
  );
}
