import React , { Suspense }from 'react';
import './comman.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function Premiumpackage() {
  return (
    <>
    <div className='premium'>
    
      <div className="standardheading">
             <h2 > Premium Package</h2>
             <a href="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Premium Package</a> &nbsp;&nbsp;
            
      </div>
      
    </div>
    <Paper>
      <Grid>
        <Card className="standardcard"> 
           <div>Premium Package</div>  
           <h5>Premium Package</h5>
           <p>We provide you a comfortable journey at affordable rates</p>
           <span>
             <img  src={process.env.PUBLIC_URL + "/flight.png"}/>
             <p>Flight Tickets in Business Class or Private Jet</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/cab.jpg"}/>
             <p>Premium Car for airport pick and drop or smaller room in 5 Star</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/hotel.jpg"}/>
             <p>5 Star Hotel Accommodation</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/hospital.png"}/>
             <p>Priority Treatment at Hospital</p>
          
         
           </span>
           <span>
             <img  src={process.env.PUBLIC_URL + "/return.png"}/>
             <p>Pre-departure orientation</p>
 
           </span>
        
        </Card>
        <Card className="standardpackage">
            <div>
               <span>From USD</span>
               <h2>$3364  <a href="/compare">select package</a></h2>
              
            </div>
        </Card>
        <Card className="standardpackbutton"> 
           <ul>
             <li >
                <a >OVERVIEW</a>
                
             </li>
             <li>
                <a href="#">Package details</a>
             </li>
             <li>
                <a >Description</a>
             </li>
             <li>
                <a href="#">Services & amenities </a>
             </li>
             <li>
                <a >Policies </a>
             </li>
             <li>
                <a >Reviews </a>
             </li>
           </ul>
        </Card>
        {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a> */}
      
    
      </Grid>
    </Paper>

    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
