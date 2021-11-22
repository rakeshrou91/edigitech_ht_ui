import React from 'react';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
import './Home.css';
import '../../App.css';
import { Link } from 'react-router-dom';
import { ReactVideo } from "reactjs-media";
import Image from 'react-bootstrap/Image';
import {Currency,Department,Destination} from '../select/Select';


export default function Home() {
  const cardstyle={boxShadow:'none',justifyContent: 'center',textAlign: 'center',display:'flex',flexDirection:'column'} 
  const paperStyle={padding:20,height:800,width :'100%',margin:"24% 0%",boxShadow:"none",justifyContent:'center',textAlign: 'center'}
  return (
    <>
  
      <Image className="img" src={process.env.PUBLIC_URL + "/banner1.png"} />
      <div className="mtimg">
       <Image src={process.env.PUBLIC_URL + "/mt.png"} rounded  />
      <h4 style={{color:'#413E3E'}}>Looking for a stress-free medical journey? </h4>
      </div>
      <Paper style={paperStyle}>
               <Grid >
                     <Card className="reactoutsection" style={cardstyle} >
                        
                       <span style={{color:'#5BD1D7', fontSize: '2vh',fontWeight:'bold'}}>REACH BEFORE YOY FLY OUT</span>
                       <div className="rt1-section-title">
                       Connect With The <br/>Leading Doctors &<br/> Hospitals
                       </div>
                     
                     
                       <p>
                       You can rely on us for choosing the top specialists and clinics. The list of doctors and hospitals present on <br/>the portal is curated after thorough research and you can expect to find the best-fit as per your<br/> requirement. You can rely on us for finding the best doctors in India and around the globe. This is not a <br/>google promoted list that we provide.
  
  
                       </p>
                     </Card>

                </Grid>
      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center',marginTop:"-50%"}}>
         <Grid >
         <Card className="card" style={cardstyle}>
                   <div className="rt1-section-title">
                     Simple Steps to Get Started
                     </div><br/>
                     <p style={{color:'#413E3E'}}>
                      Prepare For Your Medical Trip. Find out all you need to know before you start. Healthcare issues are critical & unique at the same <br/> time. And there is no one package that fits all. That's why we offer customized treatment packages
                     </p>
        </Card> 
       </Grid>
      </Paper><br/><br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center'}}>
       <Grid>
       <Card className="iconsection" style={cardstyle}>
         <div className="rowicon">
             <div className="columnicon">
               <Avatar className="avatar" src={process.env.PUBLIC_URL + "01.png"}  style={{height:120,width:120}}/> <br/>
                <span>Sneak Peek</span><br/>
                <p>Choose from list of selected Hospitals,<br/> Clinics and Healthcare Providers</p>
               
             </div>
             <div className="columnicon">
              <Avatar  src={process.env.PUBLIC_URL + "02.png"}  style={{height:120,width:120}}/><br/> 
              <span>Travel</span><br/>
              <p>Search by price, destination, and ratings</p>
              
             </div>
             <div className="columnicon">
               <Avatar  src={process.env.PUBLIC_URL + "03.png"}  style={{height:120,width:120}}/> <br/>
               <span>Accommodation</span><br/>
               <p>Get best in class and wholesome <br/>experience with us</p>
              
             </div>
             <div className="columnicon">
              <Avatar  src={process.env.PUBLIC_URL + "04.png"}  style={{height:120,width:120}}/><br/> 
              <span> Treatment</span><br/>
              <p>Get the most suitable treatment options<br/> in India & across the globe</p>
             </div>

         </div>
           
                 
      </Card>
       </Grid>
      </Paper>

      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign: 'center',height:"100%",width:"100%"}}>
        <Grid>
          <Card className="section" style={cardstyle}>
             <div className="divclass">

                 <h2>TAKE A LOOK AT</h2>
                 <h1>Our Favourite Deals</h1>
                 <br/><br/><br/>  
                 <p >Experience the best-in-class medical treatment and support for medical tourists along with activities & trips in India<br/> and around the globe</p>

                 <br/><br/><br/>
                 <button  class="link-button1" href="#"><b>Read More</b></button>
            </div>
          </Card>
        </Grid>
      </Paper>

      <Paper  style={{boxShadow:"none",justifyContent:'center',textAlign: 'center'}} >
        <Grid>
          <Card className="card" style={cardstyle}>
              <span style={{color:'#5BD1D7', fontSize: '2vh',fontWeight:'bold'}}>YOUR MONEY IS SECURE WITH US</span>
                  <div class="rt1-section-title">
                       Conversion Check
                  </div>
                  <p>Enquire the best for your medical travel</p>
                  
               </Card><br/>
                <Card className="currency" style={{boxShadow:'none'}}>
                 <br/>
                 <div className="selectbox">
                 <Currency ></Currency>&nbsp;&nbsp; &nbsp;<TextField className="textfieldamount" id="outlined-basic" label="Amount" variant="outlined" /> &nbsp;&nbsp; <Currency ></Currency>
                 </div> <br/><br/>
                 <TextField disabled className="textfieldamountdisabled" id="outlined-basic" label="Amount" variant="outlined" />
                 &nbsp; &nbsp;<button  class="link-button1" href="#"><b>Convert</b></button>
               
              
               </Card>
        </Grid>
      </Paper>
      <br/>
      <br/>
      <br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="imagessection" style={cardstyle}>
            <div className="imagesectiondiv">
                  <h2><b> GLIMPSE OF</b></h2><br/>
                 
                <h1> Top Medical Tourism <br/>Destinations </h1><br/>
                <p >We offer the best services and a list of treatment centres as per your requirement. Find the best hospitals<br/> and treatment centres in India and around the globe.</p><br/> <br/>
                <button  class="button-71">Mumbai</button> <space/><space/>
                  <button  class="button-hover">Delhi</button> <space/><space/>
                  <button  class="button-hover">Kolkata</button> <space/><space/>
                  <button  class="button-hover">Pune</button> <space/><space/>
                  <button  class="button-hover">Bangalore</button> <space/><space/>
                  <button  class="button-hover">Hyderabad</button> <space/><space/>
                  <button  class="button-hover">Ahmedabad</button> <space/><space/><br/>

                  <div class="row">
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/11.jpg"}  style={{height:'100%',width:"100%"}} />
                   </div>
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/12.jpg"}  style={{height:'100%',width:"100%" }}/>
                   </div>
                   <div class="column1">
                       <img  src={process.env.PUBLIC_URL + "/13.jpg"} style={{height:'100%',width:"100%"}}/>
                   </div>
                  
                 </div>
                 <div class="row">

                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/14.jpg"} style={{height:'100%',width:"100%"}} />
                   </div>
                   <div class="column1">
                      <img  src={process.env.PUBLIC_URL + "/15.jpg"} style={{height:'100%',width:"100%" }}/>
                   </div>
                   <div class="column1">
                       <img  src={process.env.PUBLIC_URL + "/16.jpg"}  style={{height:'100%',width:"100%"}}/>
                   </div>
                  
                 </div>
                 <a  class="link-button1" href="#"><b>SIGN IN FOR MORE OPTIONS</b></a>
              </div>
          
  
                  <div >
                 
                  <div>

                  </div>
                      
                  
                </div>
                <div style={{justifyContent:'center',textAlign:'center'}}>
                {/* <br/><br/> */}
                 
                  </div>


          </Card>
        </Grid>
      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="reactoutsection" style={cardstyle}>
          <div class="rt1-section-title">
                         Treatment Packages<br/> On Offer
                          </div>
                       <p style={{color:'#413E3E'}}>
                       Get urged to travel and seek medical advice, track down the best treatment choices at the most<br/> circumspect costs. Track down our top deals that are updated every day to book the most appropriate<br/> medical treatment according to your requirements. We offer the best support for medical tourists.
  
                       </p>

          </Card>
        </Grid>
      </Paper><br/><br/><br/><br/>
       <div><br/></div>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="card" style={cardstyle}>
           
            <Card className="reactvideo" style={{borderRadius:"26px"}}>
                      <ReactVideo
                            src={process.env.PUBLIC_URL + "/Flex-MT_Videov6.mp4"}
                            poster={process.env.PUBLIC_URL + "/play-video-bg.png"}
                            primaryColor="red"
                     
                       />
            </Card>
            
     
          </Card>
        </Grid>

      </Paper><br/><br/><br/><br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="reactoutsection" style={{cardstyle,boxShadow:'none'}}>
              <div class="rt1-section-title">
                       Help Us To Find You<br/> The Best
                       </div><br/><br/>
                       <button  class="button111">Already Diagnosed </button> <space/><space/>
                       <button style={{backgroundColor:'#5BD1D7',borderColor:'#5BD1D7'}} class="button111">Get Diagnosed </button> <space/><space/><br/>

          </Card>

        </Grid>
      </Paper><br/><br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card className="card" style={cardstyle}>
          <Card className="Card1" style={{textAlign: 'center',justifyContent: 'center',boxShadow:'5px 10px 8px #888888 '}}>
               <br/><br/> <Department></Department> &nbsp; &nbsp; &nbsp; &nbsp; <Destination></Destination>
         
               <br/><br/>
               <div className="deptbutton">
                    <button  class="link-button1" style={{textAlign: 'center',justifyContent: 'center'}}><b>Search Facility </b></button>&nbsp;&nbsp;
                    <button  class="link-button1" style={{textAlign: 'center',justifyContent: 'center'}}><b>Search Doctor</b></button> 
               </div>
          <br/>
          </Card>
          <br/><br/>
          </Card>
        </Grid>

      </Paper>

      <br/>
      <br/>
      <br/>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center',height:'100%'}} >
        <Grid>
           <Card className="card" style={{boxShadow:'none',height:'700px' }}>
           <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company Info</h2>
            
            <Link to='/sign-up'className="link"> <i class="fas fa-angle-double-right"></i> Compliance for international users</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Customer Reviews</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Privacy Policy</Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Work With Us</h2>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Become Partner</Link>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Careers</Link>
            <Link to='/'className="link"> <i class="fas fa-angle-double-right"></i> Advertise with us</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Account</h2>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Manage Your Account</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Build your own trip</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Order Status</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Booking Guide</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Travel Insurance &amp; Safety Guide</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Plan Your Trip</h2>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Special Offers</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Flights</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Tour Packages</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Accommodations</Link>
            <Link to='/'className="link"><i class="fas fa-angle-double-right"></i> Transportation</Link>
            
          </div>
        </div>
      </div>
    
     
    </div>
    
           </Card>
        </Grid>

      </Paper>
      <Paper style={{boxShadow:"none",justifyContent:'center',textAlign:'center'}}>
        <Grid>
          <Card classsName="card" style={cardstyle}>
             <div className="footer">
              
                <div className="row">
                  <div className="column">
                    <p style={{textAlign:'center',fontSize:'small'}}> Copyright © 2021. All Rights Reserved By <a style={{color:'#496cfe'}}>eHealthFlex Technologies Private Limited</a>
                    </p>
                  </div>
                <div className="column">
                  <div className="footerimg">
                <img style={{height:'26px',marginBottom:'20%'}} src={process.env.PUBLIC_URL + "/card-1.png"}/>&nbsp;&nbsp;
                <img style={{height:'26px',marginBottom:'20%'}} src={process.env.PUBLIC_URL + "/card-2.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-3.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-4.png"}/>&nbsp;&nbsp;
                <img  style={{height:'26px',marginBottom:'20%'}}src={process.env.PUBLIC_URL + "/card-5.png"}/>
               </div>
                </div>
               </div>
            </div>
          </Card>
        </Grid>
      </Paper>


             
    </>
  );
}
