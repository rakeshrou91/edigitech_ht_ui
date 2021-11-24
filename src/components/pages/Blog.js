import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function Blog() {
  return (
    <>
    <div className='blog'>
     <div className="blogheading">
             <h2 > Blog 02</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Blog 02</a> &nbsp;&nbsp;
            
      </div>
      
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
