import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Blog01card =React.lazy(() => import('./UI/blog01card'));
const Blog01sidecard = React.lazy(() => import('./UI/blog01sidecard'));
const Blogfeedback = React.lazy(() => import('./UI/blogfeedback'));
const Blog02comment = React.lazy(() => import('./UI/blog02comment'));
const Blog02card = React.lazy(() => import('./UI/blog02card'));
const Footer = React.lazy(() => import('./UI/footer'));

export default function Blog03() {
  return (
    <>
    <div className='blog3'>
       <div className="blog2heading">
             <h2 > Single Blog</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Single Blog</a> &nbsp;&nbsp;
            
      </div>
    </div>
    <Card className="blog03card">
    <tr>
      <td>
      <Suspense fallback={<div>Loading...</div>}>
         <Blog02card/>
      </Suspense>
      </td>
      <td>
      <Suspense fallback={<div>Loading...</div>}>
         <Blog01sidecard/>
      </Suspense>
      </td>
    </tr>
    </Card>
    
    

    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
