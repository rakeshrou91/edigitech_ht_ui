import React, { Suspense } from 'react';
import '../../App.css';
import './comman.css';
import Image from 'react-bootstrap/Image';
import Input from '@mui/material/Input';
import {Grid,Paper,TextField,Button} from '@material-ui/core';
import {Card } from "@material-ui/core";
const Footer = React.lazy(() => import('./UI/footer'));

export default function ContactUs() {
  return (
    <>
       <div className='contact-us'>
          <div className="contactusheading">
             <h2 > Contact Us</h2>
             <a href="/"><i class="fas fa-home"></i>&nbsp;&nbsp;Home <i class="fas fa-angle-right" ></i> &nbsp;&nbsp;Contact Us</a> &nbsp;&nbsp;
            
          </div>
       </div>
       <Paper>
         <Grid>
           <Card className="contactussection">
             <span>Contact us</span>
             <h1> Get In Touch </h1>
             <p>Please feel free to reach out to us for any kind of travel queries in relation to Medical<br/> Treatment. Our team will try & respond at the earliest.</p>
             <form>
                <Input className="input" placeholder="Name"  required/><br/>
                <Input placeholder="Mobile No"  required/><br/>
                <Input placeholder="Email Id"  required/><br/>
               
                <TextField placeholder="Message" multiline rows={2} rowsMax={4}/><br/>
                <Button>SUBMIT</Button>
             </form>
             <Image className="sectionimg1" src={process.env.PUBLIC_URL + "/abt_vec_3.png"} rounded  />
           </Card>
           
           

         </Grid>
       </Paper>
      <Suspense fallback={<div>Loading...</div>}>
         <Footer/>
      </Suspense>
    </>
  );
 
}
