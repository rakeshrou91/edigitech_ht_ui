import React , { Suspense }from 'react';
import './comman.css';
import './Affiliateprogram.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function HelpCenter() {
  return (
    <>
    <div className='help'>
      <div className="helpheading">
             <h2 > Help Center</h2>
             <a href="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Help Center</a> &nbsp;&nbsp;
            
      </div>
  
    </div>
    <Paper className="paper">
      <Grid>
        <Card className="card">
            <div className="container1"> 
               <span className="span" >WELCOME TO</span>
               <div className="rt1-section-title">
               Our Help Center
                 </div>
                 <p>
                 We're here to help you 24/7.Check out our help guides for information and answers.
                  </p>
           </div>
        </Card>
        <Card>
          <div className="row">
             <div className="column">
               <Avatar  src={process.env.PUBLIC_URL + "help-icon-1.png"}  style={{height:160,width:160}}/> <br/>
                <h2>Account Overview</h2><br/>
               
               
             </div>
             <div className="column">
              <Avatar src={process.env.PUBLIC_URL + "help-icon-2.png"}  style={{height:160,width:160}}/><br/> 
              <h2>FAQ</h2><br/>
             
              
             </div>
             <div className="column">
               <Avatar src={process.env.PUBLIC_URL + "help-icon-2.png"}  style={{height:160,width:160}}/> <br/>
               <h2 >Contact Us</h2><br/>
             
              
             </div>
             <div className="column">
              <Avatar src={process.env.PUBLIC_URL + "help-icon-4.png"}  style={{height:160,width:160}}/><br/> 
              <h2> Meet The Team</h2><br/>
           
             </div>
          </div>
        </Card>
      </Grid>
    </Paper>
    <Paper>
      <Grid>
        <Card>
          <div className="section3">
                <div>    Didn't find what You were looking for?</div>
                <button>SUBMIT YOUR QUERY</button>
          </div>
        </Card>
      </Grid>
    </Paper>
    <Paper>
      <Grid>
        <Card className="contents">
          
        </Card>
      </Grid>
    </Paper>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    
    </>
  );
}
