import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
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
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
