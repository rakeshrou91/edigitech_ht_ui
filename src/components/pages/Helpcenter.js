import React , { Suspense,useState }from 'react';
import './comman.css';
import './Affiliateprogram.css';
import {Grid,Paper,Avatar,TextField} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function HelpCenter() {
  const [question1,setQuestion1]=useState(false);
  const [question2,setQuestion2]=useState(false);
  const [question3,setQuestion3]=useState(false);
  const [question4,setQuestion4]=useState(false);

  const question1Content=<div>
    
      <Card className="helpanswer1card" style={{borderRadius:'20px'}}>
       <p>You are welcome to make deposits or partial payments for your reservation, but until eHealthFlex receives full payment for your reservation, your seats will not be secured. Please make your complete payment as soon as possible.</p>
      </Card>
   
  </div>
  const question2Content=<div>
    
  <Card className="helpanswer2card" style={{borderRadius:'20px'}}>
   <p>Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients, collect leads, and close sales through a more streamlined experience.</p>
  </Card>

</div>
const question3Content=<div>
    
<Card className="helpanswer1card" style={{borderRadius:'20px'}}>
 <p>Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients, collect leads, and close sales through a more streamlined experience.</p>
</Card>

</div>
const question4Content=<div>
    
<Card className="helpanswer1card" style={{borderRadius:'20px'}}>
 <p>Landing Page Builder is a hosted platform powered by the Brizy builder aiming to connect you with p otential clients, collect leads, and close sales through a more streamlined experience.</p>
</Card>

</div>

  return (
    <>
    <div className='help' >
      <div className="helpheading">
             <h2 > Help Center</h2>
             <a href="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Help Center</a> &nbsp;&nbsp;
            
      </div>
  
    </div>
    <Paper className="paper" style={{boxShadow:'none'}}>
      <Grid>
        <Card className="card" style={{boxShadow:'none'}}>
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
        <Card style={{boxShadow:'none'}}>
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
    <Paper style={{boxShadow:"none"}}>
      <Grid >
        <Card style={{boxShadow:"none"}}>
          <div className="section3">
                <div>    Didn't find what You were looking for?</div>
                <button>SUBMIT YOUR QUERY</button>
          </div>
        </Card>
      </Grid>
    </Paper>
    <Paper style={{boxShadow:"none"}}>
      
      <Grid>
      
        <Card className="helpquetionscard" style={{borderRadius:'555px'}}>
        
          <ul>
            <li>
                 <a onClick={()=>{setQuestion1(!question1)}}><Avatar style={{backgroundColor:'#004D61'}}><i class="fas fa-question"></i></Avatar></a>
                 <span>What are the possible reasons for my credit card declining?</span>
                
            </li>
            
          </ul>
       
        </Card>
        {question1 && question1Content} 
        <Card className="helpquetionscard" style={{borderRadius:'555px'}}>
          <ul>
            <li>
                 <a onClick={()=>{setQuestion2(!question2)}}><Avatar style={{backgroundColor:'#004D61'}}><i class="fas fa-question"></i></Avatar></a>
                 <span>How long in advance must we book and make full payment?</span>
                 
            </li>
            
          </ul>
           
           
        </Card>
        {question2 && question2Content}   
        <Card className="helpquetionscard" style={{borderRadius:'555px'}}>
          <ul>
            <li>
                 <a onClick={()=>{setQuestion3(!question3)}}><Avatar style={{backgroundColor:'#004D61'}}><i class="fas fa-question"></i></Avatar></a>
                 <span>How do I search for a hotel in a certain area using the map tool?</span>
            </li>
            
          </ul>
           
         
        </Card>
        {question3 && question3Content}   
        <Card className="helpquetionscard" style={{borderRadius:'555px'}}>
          <ul>
            <li>
                 <a onClick={()=>{setQuestion4(!question4)}}><Avatar style={{backgroundColor:'#004D61'}}><i class="fas fa-question"></i></Avatar></a>
                 <span>How can I make a booking?</span>
            </li>
           
          </ul>    
        </Card>
        {question4 && question4Content}  
      </Grid>
    </Paper>
    <Suspense fallback={<div>Loading...</div>}>
      <Footer/>
    </Suspense>
    
    </>
  );
}
