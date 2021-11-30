import React , { Suspense ,useState}from 'react';
import './comman.css';
import './UI/footer.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function StandardPackage() {
  const [policies,setPolicies]=useState(false);
  const [description,setDescription]=useState(false);
  const [overview,setOverview]=useState(false);
  const [reviews,setReviews]=useState(false);
  
  const descriptionContent=<div>
    
      <Card className="standardhotelcard">
         <span>Hotel Description</span>
         <p>Within walking distance of your destination's business and financial centers as well as several shopping malls. Property will be nearer to your Hospital and will have good connectivity with other parts of the city. Several public transportation options will also be available .</p>
         <p>Spacious hotel rooms and suites overlooking the city with panoramic garden views, offer optimal comfort with full service at a reasonable price. Suites come with fully-equipped kitchens.</p>
      </Card>
   
  </div>
  const reviewsContent=<div>
    
  <Card className="standardreviews">

    <div>
       <img  src={process.env.PUBLIC_URL + "/cmnt-2.jpg"} style={{ width: 80, height: 80,border: '2px solid #496cfe'}}/>
      <span><i class="fas fa-calendar-alt"></i> Stayed in Nov 2020</span> 
      <span><i class="fas fa-calendar-check"></i> Stayed in Nov 2020</span>
    </div>
     
  </Card>
 
</div>
  const policiesContent=<div>
    
    <Card className="standardpolicies">
     <h3>Hotel Policies</h3>
     <ul>
       <li>
         <img  src={process.env.PUBLIC_URL + "/hottel-cion-16.png"}/>
         <h4>Check-In & Check-Out</h4>
         <div>
         <p><i class="far fa-check-circle"></i>  Check-in from 12:00 </p><p><i class="far fa-check-circle"></i> Check-out before 11:00</p>
         </div>
       </li>
       <li>
         <img  src={process.env.PUBLIC_URL + "/hottel-cion-17.png"}/>
         <h4>Children And Extra Beds</h4>
         <span>Guests aged under 18 must be accompanied by a parent or legal guardian.</span>
      
       </li>
       <li>
         <img  src={process.env.PUBLIC_URL + "/hottel-cion-15.png"}/>
         <h5>Dining</h5>
         <div>
         <span>Buffet Breakfast $15</span>
         </div>
       </li>
       <li>
         <img  src={process.env.PUBLIC_URL + "/hottel-cion-14.png"}/>
         <h4>Paying At The Hotel</h4>
         <span>
           <div>
             <ul>
               <li>
               <img style={{height:'26px'}} src={process.env.PUBLIC_URL + "/card-1.png"}/>
               </li>
               <li>
               <img style={{height:'26px'}} src={process.env.PUBLIC_URL + "/card-2.png"}/>
               </li>
               <li>
               <img style={{height:'26px'}} src={process.env.PUBLIC_URL + "/card-3.png"}/>
               </li>
               <li>
               <img style={{height:'26px'}} src={process.env.PUBLIC_URL + "/card-4.png"}/>
               </li>
               <li>
               <img style={{height:'26px'}} src={process.env.PUBLIC_URL + "/card-5.png"}/>
               </li>
             </ul>
           </div>
        
        </span> 
       </li>
     </ul>
  </Card>
  <Card className="standardcancel">
    <span>Cancellation</span>
    <h3>CANCELLATIONS AND REFUNDS</h3>  
    <h4>Our Fault</h4>
    <p>We work very hard to ensure that all tours run as scheduled and enjoy a 99% success rate. When a tour cancels, and it is the fault of The Shoreditch Pub Crawl or one of the freelance guides we work with, we will refund your prebought ticket as well as offer up to 100% of the value of the original ticket price as credit towards the purchase of another tour as compensation. This credit cannot be used in any other way and will not be cashable.</p>
    <h4>Your Request</h4>
    <p>Should you not be able to attend your tour and need to cancel a tour booking letting us know at least 24 hours before your tour, we will cancel your ticket and credit you 50% of the purchase price towards the purchase of an additional future tour. We have a no refund policy, unless we are at fault for the cancelation of your tour.</p>
    <h4>Acts of God</h4>
    <p>We may not be held responsible should we be unable to offer a tour due to Acts of God, (tsunamis, earthquakes, volcanic dust clouds, extreme weather, etc.).</p>

  </Card>
   
</div>
  const overviewContent=<div>
    
  <Card className="standardoverviewcard">
     <h4>highlights</h4>
     <ul>
       <li><i class="fas fa-check"></i>  A Language Translator will also be provided for the foreign patients</li>
       <li><i class="fas fa-check"></i>  On-demand personal assistant</li>
       <li><i class="fas fa-check"></i>  The package will also include City Tour</li>
       
     </ul>
  </Card>
  <Card className="standardoverviewcard1">
     <h3>Tour Details</h3>
     <ul>
        <li>
         
           <img src={process.env.PUBLIC_URL + "/tour-1.png"} />
         
           <h2>Booking Type</h2>
           <h4>Instant Booking</h4>
        </li>
        <li>
         
         <img src={process.env.PUBLIC_URL + "/tour-2.png"} />
       
         <h2>Tour Type   </h2>
         <h4>Private Tour</h4>
      </li>
      <li>
         
         <img src={process.env.PUBLIC_URL + "/tour-3.png"} />
       
         <h2>Availability</h2>
         <h4>Guide/Instructor</h4>
      </li>
      <li>
         
         <img src={process.env.PUBLIC_URL + "/tour-4.png"} />
       
         <h2>Guiding Method</h2>
         <h4>Available Daily</h4>
      </li>

      
     </ul>
   
  </Card>

  <Card className="standardoverviewcard1">
     <h3>Good to know</h3>
     <span>PAYMENT</span>
     <p>A deposit of 10% is required when booking this tour. The remaining balance will be charged 45 days prior departure. For any bookings within 45 days of departure, the full tour amount will be charged upon booking.</p>
     <span>TRAVEL INSURANCE</span>
     <p>A deposit of 10% is required when booking this tour. The remaining balance will be charged 45 days prior departure. For any bookings within 45 days of departure, the full tour amount will be charged upon booking.</p>
    
  </Card>


</div>

 
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
               <h2>$2364  <a href="/compare">select package</a></h2>
              
            </div>
        </Card>
        <Card className="standardpackbutton"> 
           <ul>
             <li >
                <a onClick={()=>{setOverview(!overview)}}>OVERVIEW</a>
                
             </li>
             <li>
                <a href="#">Package details</a>
             </li>
             <li>
                <a onClick={()=>{setDescription(!description)}}>Description</a>
             </li>
             <li>
                <a href="#">Services & amenities </a>
             </li>
             <li>
                <a onClick={()=>{setPolicies(!policies)}}>Policies </a>
             </li>
             <li>
                <a onClick={()=>{setReviews(!reviews)}}>Reviews </a>
             </li>
           </ul>
        </Card>
        {/* <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a> */}
      
      {description && descriptionContent} 
      {overview && overviewContent}
      {overview && overviewContent}
      {reviews && reviewsContent}    
      </Grid>
    </Paper>





    
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    </>
  );
}
