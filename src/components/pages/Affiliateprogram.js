import React , { Suspense }from 'react';
import './Affiliateprogram.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Aboutussignup = React.lazy(()=>import('./UI/aboutussignup'));
const Footer = React.lazy(() => import('./UI/footer'));

export default function AffiliateProgram() {
  return (
    <>
    <div className='affiliateprogram'>
      <div className="heading">
             <h2 > Affiliate Program</h2>
             <a href="/Support"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Affiliate Program</a> &nbsp;&nbsp;
            
      </div>
     
    </div>
    <Paper className="paper" style={{boxShadow:'none'}}>
      <Grid >
         <Card className="card" style={{boxShadow:'none'}}>
           <div className="container1"> 
               <span className="span" >WHY SHOULD YOU JOIN</span>
               <div className="rt1-section-title">
                Affiliate Program
                 </div>
                 <p>
                  Joining our affiliate program provides you with countless opportunities to combine your love for travel and your ability to earn <br/>additional revenue.
                  </p>
           </div>
            
                  
           </Card>

         </Grid>
      </Paper>
      <Suspense fallback={<div>Loading...</div>}>
      <Aboutussignup/>
      </Suspense><br/>
      <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
      </Suspense>
    {/* <p  style={{marginTop:'-0%'}}>
       <h6 ><i class="fas fa-home"></i> </h6>
       </p>
     */}
    </>
  );
}
