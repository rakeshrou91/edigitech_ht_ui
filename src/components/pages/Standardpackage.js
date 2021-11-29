import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function StandardPackage() {
  return (
    <>
    <div className='standard'>
      <div className="standardheading">
             <h2 > Standard Package</h2>
             <a href="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Standard Package</a> &nbsp;&nbsp;
            
      </div>
    </div>
    <Paper>
      <Grid>
        <Card className="standardcard"> 
           <div>Standard Package</div>  
           <h5>Standard Package</h5>
           <p>We provide you a comfortable journey at affordable rates</p>
           <span>
             <img  src={process.env.PUBLIC_URL + "/flight.png"}/>
             <p>Flight Tickets in Economy Class</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/cab.jpg"}/>
             <p>Standard Car for airport pick and drop or smaller room in 5 Star</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/hotel.jpg"}/>
             <p>3-4 Star Hotel Accommodation</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/hospital.png"}/>
             <p>Hospital</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/return.png"}/>
             <p>Pre-departure orientation</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/hottel-cion-9.png"}/>
             <p>Full time valet (optional)</p>
          
         
           </span>
        
        </Card>
        <Card className="standardpackage">
            <div>
               <span>From USD</span>
               <h2>$2364</h2>
               <a href="/">select package</a>
            </div>
        </Card>
      </Grid>
    </Paper>





    
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
