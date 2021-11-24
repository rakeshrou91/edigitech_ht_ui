import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function TourismPackage() {
  return (
    <>
    <div className='compare'>
      <div className="compareheading">
             <h2 > Tourism Package</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Tourism Package</a> &nbsp;&nbsp;
            
      </div>
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
