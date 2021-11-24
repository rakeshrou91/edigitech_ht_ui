import React from 'react'
import "./footer.css";
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
import { Link } from 'react-router-dom';
const Footer = () =>{

    const cardstyle={boxShadow:'none',justifyContent: 'center',textAlign: 'center',display:'flex',flexDirection:'column'} 
    const paperStyle={padding:20,height:800,width :'100%',margin:"24% 0%",boxShadow:"none",justifyContent:'center',textAlign: 'center'}
    return (
        <div>
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
              
                <div className="footerrow">
                  <div className="footercolumn">
                    <p style={{textAlign:'center',fontSize:'small'}}> Copyright © 2021. All Rights Reserved By <a style={{color:'#496cfe'}}>eHealthFlex Technologies Private Limited</a>
                    </p>
                  </div>
                <div className="footercolumn">
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

        </div>
    );
}

export default Footer;
