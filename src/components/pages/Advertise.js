import React, { Suspense } from 'react';
import "./comman.css";
import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import Container from "@material-ui/core/Container";
const Footer = React.lazy(() => import("./UI/footer"));
const Navbar1= React.lazy(()=> import("../Navbar1"));
const Advertise = () => {
    return (
        <>
       <Suspense fallback={<div>Loading...</div>}>
          <Navbar1/>
       </Suspense>
     
      <div className="advertise">
        <div className="advertiseheading">
        <Typography  variant="h2" gutterBottom component="div">
        <h2>Advertise With Us</h2>
        </Typography>
         
          <a href="/">
            <i class="fas fa-home"></i>&nbsp;&nbsp;Home&nbsp;&nbsp;
            <i class="fas fa-angle-right"></i> &nbsp;&nbsp;Advertise With Us
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
      {<br/>}
      <Container maxWidth="xs">
      <Avatar
          alt="abt_vec_2"
          src={process.env.PUBLIC_URL + "/abt_vec_2.png"}
          style={{ height: 300, width: 400}}
        />
      </Container>
      <Container maxWidth="md">
      
        <Typography variant="h4" gutterBottom component="div" style={{color:"#5bd1d7"}} >
        Advertise With Us
       </Typography>
       <Typography variant="subtitle1" gutterBottom component="div">
       We are working dedicatedly to be amongst the industry’s leading healthcare providing platforms. Advertisers can trust our brand, products, and services as we are recognized for excellence. Advertising with us will help you in gaining new leads and boosting sales.
      </Typography>
      {<br/>}
     
      </Container>
     
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
        </>
    )
}

export default Advertise;
