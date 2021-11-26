import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
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
    <Paper>
       <Grid>
         <Card>
           
         </Card>
       </Grid>
    </Paper>
    <Suspense fallback={<div>Loading...</div>}>
      <Blogprevnext/>
      <Footer/>
    </Suspense>
    </>
  );
}
